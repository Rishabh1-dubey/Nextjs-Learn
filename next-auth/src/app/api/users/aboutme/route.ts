import { getDataFromToken } from "@/helpers/detDataFromToken";
import User from "@/models/userModels";
import { connect } from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";


connect()


export async function POST(request : NextRequest) {
   try {
    const userId = await getDataFromToken(request);
    const user = await User.findOne({_id:userId}).select("-password")

    // check if there is no user
    return NextResponse.json({
        message:"User found",
        data : user
    })
   } catch (error) {
    console.log(error)
   }
}