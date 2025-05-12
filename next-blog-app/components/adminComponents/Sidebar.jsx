import { CopyPlus, MailPlus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets.js";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4 flex flex-col items-start shadow-md">
      <Link href="/admin/addBlog">
        <div className="mb-8">
          <Image src={assets.blogIcon} alt="Blog Icon" width={40} height={40} />
        </div>

        <div className="flex items-center mb-4 gap-3 cursor-pointer hover:text-blue-600">
          <CopyPlus size={20} />
          <p>Add Blogs</p>
        </div>
      </Link>

      <Link href="/admin/blogList">
        <div className="flex items-center mb-4 gap-3 cursor-pointer hover:text-blue-600">
          <Image
            src={assets.blogI}
            alt="Blog List Icon"
            width={20}
            height={20}
          />
          <p>Blog List</p>
        </div>
      </Link>

      <Link href="/admin/subscription">
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <MailPlus size={20} />
          <p>Subscription</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
