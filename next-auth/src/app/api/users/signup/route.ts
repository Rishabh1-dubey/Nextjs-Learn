//it is use for connecting database
import { connect } from "@/dbconfig/dbConfig";
import { sendEmail } from "@/helpers/mailers";
import User from "@/models/userModels";
import bcryptjs from "bcryptjs";
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
      return NextResponse.json({ error: "User alreasdy Exist" },
         { status: 400 }
      )
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser =  await newUser.save();
    console.log(savedUser);


    const userId = savedUser._id
    
//send verification email
await  sendEmail({email, emailType:"VERIFY", userId:userId})

return NextResponse.json({
  message:"User created successfully",
  success:true,
  savedUser
})

  } catch (error:any) {
    console.log(error)
    return NextResponse.json(
      { message: "Error while fetching data",error:error.message },
      { status: 500 }
    ) 
  }
}
