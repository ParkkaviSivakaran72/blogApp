import { assets } from "@/assets/assets";
import Sidebar from "@/components/adminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer} from 'react-toastify';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <ToastContainer />
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1  ">
        <div className="flex justify-between items-center mb-6 bg-gray-100">
          <p className="text-xl font-semibold m-5">Admin Panel</p>
          <Image
            src={assets.profileIcon}
            alt="Profile Icon"
            width={40}
            height={40}
            className="rounded-full mr-4"
          />
        </div>

        {/* Children components */}
        {children}
      </div>
    </div>
  );
}
