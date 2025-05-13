import { assets } from "@/assets/assets";
import Image from "next/image";

const BlogTable = ({ author_img, author, title, category,date ,deleteBlog,mongoId}) => {
    const blogDate = new Date(date);
  return (
    <tr className="border-b hover:bg-gray-50 transition-colors duration-200">
      <td className="px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={author_img ? author_img : assets.profileIcon}
            alt="Author"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <span className="font-medium text-gray-800">{author ? author : 'Unknown Author'}</span>
      </td>

      <td className="px-4 py-3 text-gray-700">{title ? title : 'No Title'}</td>
      <td className="px-4 py-3">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
          {category ? category : 'Uncategorized'}
        </span>
      </td>
      <td className="px-4 py-3 text-gray-500 text-sm">{blogDate.toDateString()}</td>
      <td className="px-4 py-3">
        <button className="text-red-600 hover:text-red-800 font-semibold transition duration-150" onClick = {() => deleteBlog(mongoId)}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default BlogTable;
