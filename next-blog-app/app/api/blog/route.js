import connectDB from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises'
import { model } from "mongoose";
import Blogmodel from "@/lib/models/blogModel.js";
import fs from 'fs/promises';
const DBconnect = async () => {
    await connectDB();
}
DBconnect();

export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get('id')
    if (blogId) {
        const blog = await Blogmodel.findById(blogId);
        return NextResponse.json(blog)
    }
    else {
        const blogs = await Blogmodel.find({});
        return NextResponse.json({ blogs })
    }


}


export async function POST(request) {
    const formData = await request.formData();
    const timeStamp = Date.now();
    const image = formData.get('image');
    const imageBytesData = await image.arrayBuffer();
    const buffer = Buffer.from(imageBytesData);
    const path = `./public/${timeStamp}_${image.name}`;
    await writeFile(path, buffer);
    const imageURL = `/${timeStamp}_${image.name}`;
    console.log(formData)

    const author_img = formData.get('author_img');
    const author_imageBytesData = await author_img.arrayBuffer();
    const author_buffer = Buffer.from(author_imageBytesData);
    const author_path = `./public/${timeStamp}_${author_img.name}`;
    await writeFile(author_path, author_buffer);
    const author_imageURL = `/${timeStamp}_${author_img.name}`;

    const blogData = {
        title: `${formData.get('title')}`,
        category: `${formData.get('category')}`,
        description: `${formData.get('description')}`,
        author: `${formData.get('author')}`,
        author_img: `${author_imageURL}`,
        image: `${imageURL}`,
    }
    await Blogmodel.create(blogData)
    console.log('blog saved')
    return NextResponse.json({ success: true, message: "Blog added" });
}

export async function DELETE(request) {
  try {
    const blogId = request.nextUrl.searchParams.get('id');
    const blog = await Blogmodel.findById(blogId);
    if (!blog) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }
    // Safely remove images if they exist
    if (blog.image) {
      await fs.unlink(`./public/${blog.image}`).catch(() => {});
    }
    if (blog.author_img) {
      await fs.unlink(`./public/${blog.author_img}`).catch(() => {});
    }
    await Blogmodel.findByIdAndDelete(blogId);
    return NextResponse.json({ message: 'Blog deleted' });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}