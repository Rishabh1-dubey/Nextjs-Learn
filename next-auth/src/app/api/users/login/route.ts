import User from "@/models/userModels";
import { connect } from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

import jwt from "jsonwebtoken";

connect();
export async function Post(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "Not able to find Your useer" },
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
      user: user._id,
      username: user.username,
      password: user.password,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1h",
    });
    const response = NextResponse.json({
      message: "User loggedIn successfully",
      status: 200,
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
