"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets.js";
import { FaSearch } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {
  const [email,setemail] = useState("");

  const subscription = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email',email);
    const response = await axios.post('/api/email',formData);
    if(response.data.success){
      toast.success(response.data.message);
      setemail('');
    }
    else{
      toast.error('Error');
    }
  }

  
  return (
    <header className="bg-gray-100 text-white pt-12 px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Logo + Title on Left, Auth Buttons on Right */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-3">
            <Image
              src={assets.blogIcon}
              alt="blog icon"
              width={40}
              height={40}
            />
            <p className="text-2xl font-extrabold text-blue-500">Blogs</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-800 hover:text-white transition">
              Login
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              Signup
            </button>
          </div>
        </div>

        {/* Bottom Row: Centered Content */}
        <div className="text-center mb-10">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Latest Blogs</h1>
            <p className="text-gray-600 mb-6">
              Discover trending articles, tech insights, and community stories.
            </p>

            {/* Subscribe Form */}
            <form action="" className="flex justify-center py-5 mb-6" onSubmit={(e) => {subscription(e)}}>
              <div className="flex items-center space-x-2 w-full max-w-md rounded-lg overflow-hidden shadow-md">
                <div className="relative flex-1">
                  <MdOutlineMarkEmailRead className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    onChange={(e)=>setemail(e.target.value)}
                    value={email}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button

                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Search Form */}
            <form action="" className="flex justify-center items-center px-10 py-4">
              <div className="relative w-full max-w-md">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full px-10 py-2 pl-12 border border-gray-300 bg-gray-100 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
