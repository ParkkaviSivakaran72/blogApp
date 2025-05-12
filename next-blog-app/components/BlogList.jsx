"use client";
import { assets, blog_data } from '@/assets/assets';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDropright } from 'react-icons/io';

const BlogList = () => {
  const categories = ['All', ...new Set(blog_data.map(blog => blog.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog')
    setBlogs(response.data.blogs);
    console.log(response.data.blogs)
  }

  useEffect(() => {
    fetchBlogs();
  },[])
  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="p-6">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog, index) => (
          <div key={index} id={blog._id} className="bg-white rounded-2xl shadow-lg p-4">
            <Link href={`/blogs/${blog._id}`}>
            <Image 
              src={blog.image} 
              alt={blog.title}
              width={300}
              height={300}
              className="rounded-xl mb-4 object-cover w-full h-[200px]"
            />
            </Link>
            <h3 className="text-xl font-semibold mb-2">
              {blog.title} - <span className="text-sm text-gray-500">{blog.category}</span>
            </h3>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <Image 
                  src={blog.author_img}
                  alt={blog.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h5 className="text-sm text-gray-800">{blog.author}</h5>
              </div>
              <Link href={`/blogs/${blog._id}`}>
              <button className="flex items-center gap-1 text-blue-600 font-medium hover:underline">
                Read more <IoIosArrowDropright className="text-xl" />
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
