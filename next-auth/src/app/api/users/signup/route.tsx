//it is use for connecting database
import { connect } from "@/dbconfig/dbConfig";
import { sendEmail } from "@/helpers/mailers";
import User from "@/models/userModels";
import becryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { username, email, password, } = reqBody

    console.log(reqBody)

    //check if user already exist
    const user = await User.findOne({email});
    if (user) {
      return NextResponse.json({ error: "User alreasdy Exist" }, { status: 400 }
      )
    }

    //hash password
    const salt = await becryptjs.genSalt(10);
    const hashedPassword = await becryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = newUser.save();
    console.log(savedUser);


//send verification email
await  sendEmail({email, emailType:"VERIFY", userId:savedUser._id})

return NextResponse.json({
  message:"User created successfully",
  success:true,
  savedUser
})

  } catch (error:any) {
    return NextResponse.json({ message: "Error while fetching data" }),
      { status: 500 }
    
  }
}
