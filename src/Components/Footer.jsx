import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

function Footer() {
  return (
    <div className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Education</h1>
          <p className="text-lg mb-4">
            Unlock knowledge with expert-led online courses.
          </p>
          <div className="flex justify-center md:justify-normal lg:justify-center items-center gap-4 text-3xl">
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <CiTwitter className="hover:text-blue-400 cursor-pointer" />
            <FiYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* About Us */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <ul className="space-y-2 text-lg">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Pages</li>
            <li className="hover:text-yellow-400 cursor-pointer">Courses</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Others</h2>
          <ul className="space-y-2 text-lg">
            <li className="hover:text-yellow-400 cursor-pointer">Mentors</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
            <li className="hover:text-yellow-400 cursor-pointer">Blogs</li>
            <li className="hover:text-yellow-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-yellow-400 cursor-pointer">Licenses</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex justify-center items-center gap-3">
              <MdOutlinePhone className="text-xl" /> +91 9344245993
            </li>
            <li className="flex justify-center items-center gap-3">
              <MdOutlineMail className="text-xl" /> Education@gmail.com
            </li>
            <li className="flex justify-center items-center gap-3">
              <GrMapLocation className="text-xl" /> Kumbakonam
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center mt-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} Education. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
