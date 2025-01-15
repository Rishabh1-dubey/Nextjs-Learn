import { connect } from "@/dbconfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody)
    const { token } = reqBody;
    console.log(token);

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json(
        { error: "user Already Exist" },
        { status: 401 }
      );
    }
    console.log(user);

    user.isVerfied = true;
    (user.verifyToken = undefined),
     (user.verifyTokenExpiry = undefined);

    await user.save();

    return NextResponse.json(
      {
        message: "Email verified Successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
