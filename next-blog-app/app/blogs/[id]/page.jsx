"use client";
import { assets, blog_data } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const [paragraph, setParagraph] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchParagraph = async (heading) => {
    try {
      const res = await fetch("/api/generateParagraph", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ heading }),
      });
      const json = await res.json();
      setParagraph(json.paragraph);
    } catch (error) {
      console.error("Failed to fetch paragraph:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const blog = blog_data.find((item) => Number(params.id) === item.id);
    setData(blog);
    if (blog) fetchParagraph(blog.title);
  }, [params.id]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-3 sm:p-6 md:p-10 transition-all duration-300">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-start mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-300">
          <Link href="/">
            <Image
              src={assets.blogIcon}
              alt="Blog Icon"
              width={40}
              height={40}
              className="drop-shadow-md"
            />
          </Link>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 animate-pulse">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 font-medium">
              Loading your content...
            </p>
          </div>
        ) : data ? (
          <div className="bg-white shadow-xl hover:shadow-2xl rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 transition-all duration-300 border border-gray-100">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
              {data.title}
            </h1>

            {/* Blog Image */}
            <div className="overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg">
              <Image
                src={data.image}
                alt="Blog"
                width={800}
                height={400}
                className=" sm:h-[300px] md:h-[400px] rounded-xl object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 text-sm sm:text-base text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
              <div className="overflow-hidden rounded-full border-2 border-gray-200">
                <Image
                  src={data.author_img}
                  alt="Author"
                  width={50}
                  height={50}
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-medium">By {data.author}</span>
            </div>

            {/* Description */}
            <div className="prose max-w-none">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {data.description}
              </p>
              {paragraph && (
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center p-10 bg-white rounded-xl shadow-md">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No blog found
            </h3>
            <p className="mt-1 text-gray-500">
              We couldn't find the blog you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
