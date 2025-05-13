'use client'

import BlogTable from '@/components/adminComponents/BlogTable'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {
  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog')
    setBlogs(response.data.blogs)
    console.log(blogs);
  }
  useEffect(()=>{
    fetchBlogs()
    
  },[])
  const deletBlog = async (mongoId) => {
    const response = await axios.delete('/api/blog',{
      params:{
        id:mongoId
      }
    })
    toast.success(response.data.message)
    fetchBlogs()
  }
  return (
    <div className="p-6">
      <div className="text-2xl font-semibold mb-4">
        All Blogs
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item,index) => {
              return <BlogTable key={index} mongoId={item._id} title={item.title} category={item.category} date={item.date} author={item.author} author_img={item.author_img} deleteBlog={deletBlog}/> 
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page
