import User from "@/models/userModels";
import { connect } from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "Not able to find Your user" },
        { status: 400 }
      );
    }

    const verifyPass = await bcryptjs.compare(password, user.password);

    if (!verifyPass) {
      return NextResponse.json(
        { error: "Password not  Matched" },
        { status: 400 }
      );
    }

    //for tokenization
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    const reponse = NextResponse.json({
      message: "User loggedIn successfully",
      status: 200,
      success: true,
    });
    reponse.cookies.set("token", token, { httpOnly: true });
    return reponse;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
