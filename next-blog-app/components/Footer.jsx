"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-white pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left: Branding */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-500">Blogs</h2>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Empowering tech minds with stories, updates & inspiration. Stay connected and grow with us.
          </p>
        </div>

        {/* Center: Newsletter & Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Stay Updated</h3>
          <form className="flex rounded-lg overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
            >
              Subscribe
            </button>
          </form>
          <div className="flex flex-wrap mt-5 gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition">Terms</a>
            <a href="#" className="hover:text-blue-400 transition">About</a>
            <a href="#" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>

        {/* Right: Social + Scroll Up */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          <div className="flex space-x-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-2xl text-gray-300 hover:text-blue-500 transition-transform duration-300 hover:scale-110" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl text-gray-300 hover:text-blue-500 transition-transform duration-300 hover:scale-110" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-2xl text-gray-300 hover:text-blue-500 transition-transform duration-300 hover:scale-110" />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition"
          >
            <FaArrowUp className="mr-2" /> Back to top
          </button>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Blogs. Built with ❤️ using React & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
