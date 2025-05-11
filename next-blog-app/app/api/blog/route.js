import connectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
import { model } from "mongoose";
import Blogmodel from "@/lib/models/blogModel.js";

const DBconnect = async () => {
    await connectDB();
}
DBconnect();

export async function GET(request){
    console.log('Blog GET');
    return NextResponse.json({msg:"API working"})
}

export async function POST(request){
    const formData = await request.formData();
    const timeStamp = Date.now();
    const image = formData.get('image');
    const imageBytesData = await image.arrayBuffer();
    const buffer = Buffer.from(imageBytesData);
    const path = `./public/${timeStamp}_${image.name}`;
    await writeFile(path,buffer);
    const imageURL = `/${timeStamp}_${image.name}`;

    const author_img = formData.get('image');
    const author_imageBytesData = await image.arrayBuffer();
    const author_buffer = Buffer.from(author_imageBytesData);
    const author_path = `./public/${timeStamp}_${author_img.name}`;
    await writeFile(author_path,author_buffer);
    const author_imageURL = `/${timeStamp}_${author_img.name}`;
    
    const blogData = {
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imageURL}`,
        author_img:`${author_imageURL}`,
        
    }
    await Blogmodel.create(blogData)
    console.log('blog saved')
    return NextResponse.json({success:true,message:"Blog added"});
}