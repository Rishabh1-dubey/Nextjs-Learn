import { connect } from "@/dbconfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";


connect()

export async function GET(request:NextRequest){
try {
    
const response = NextResponse.json({
    message:"User successfully Logout",success:true
})

response.cookies.set("token" , "" ,{
    httpOnly:true,
    expires: new Date(0)
})

} catch (error:any) {
    return NextResponse.json({error:error.message},{status:500})
}
} 