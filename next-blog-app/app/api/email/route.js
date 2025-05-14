import connectDB from "@/lib/config/db";
import { emailModel } from "@/lib/models/emailModel";
import { NextResponse } from "next/server";

const loadDB = async () => {
    await connectDB();
}
loadDB();
export async function POST(request){
    const formData = await request.formData();
    const emailData = {
        email:`${formData.get('email')}`
 
    }
    await emailModel.create(emailData);
    return NextResponse.json({success:true,message:"email subscripted"})
}

export async function GET(request){
    const emails = await emailModel.find({});
    return NextResponse.json({emails})
}

export async function DELETE(request){
    const emailId = request.nextUrl.searchParams.get('id');
    await emailModel.findByIdAndDelete(emailId)
    return NextResponse.json({message:"email deleted "})

}