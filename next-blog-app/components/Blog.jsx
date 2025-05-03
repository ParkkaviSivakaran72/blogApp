import { assets, blog_data } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {blog_data.slice(0, 4).map((blog, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg p-4">
          <Image
            src={blog.image}
            alt={blog.title}
            width={300}
            height={300}
            className="rounded-xl mb-4 object-cover w-full h-[200px]"
          />
          <h3 className="text-xl font-semibold mb-2">
            {blog.title} -{" "}
            <span className="text-sm text-gray-500">{blog.category}</span>
          </h3>
          <p className="text-gray-600 mb-4">{blog.description}</p>
          <div className="flex items-center justify-between mt-4">
            {/* Author Info */}
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

            {/* Read More Button */}
            <button className="flex items-center gap-1 text-blue-600 font-medium hover:underline">
              Read more <IoIosArrowDropright className="text-xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
