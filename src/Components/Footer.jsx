import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-100 via-white to-pink-100 py-10 px-6 md:px-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        
        {/* Logo & Social */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-green-600 text-white rounded-md w-10 h-10 flex items-center justify-center font-bold text-lg">M</div>
            <span className="ml-2 text-xl font-bold text-gray-800">Education</span>
          </div>
          <p className="text-gray-600 mb-4 text-sm">
            Unlock knowledge with expert-led online courses.
          </p>
          <div className="flex space-x-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">About Us</h3>
          <ul className="space-y-2 text-gray-600">
            <Link to='/'><li className="hover:text-black">Home</li></Link>
            <Link to='/aboutus'><li className="hover:text-black">About Us</li></Link>
            <Link to='/courses'><li className="hover:text-black">Courses</li></Link>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Others</h3>
          <ul className="space-y-2 text-gray-600">
             <Link to='/mentors'><li className="hover:text-black">Mentors</li></Link>
            <Link to='/aboutus'><li className="hover:text-black">About Us</li></Link>
            <Link to='/blogs'><li className="hover:text-black">Blogs</li></Link>
            <li className="hover:text-black">Privacy Policy</li>
            <li className="hover:text-black">Licenses</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2"><FiPhone /> +91 9344245993</li>
            <li className="flex items-center gap-2"><FiMail /> kmanoj71737@gmail.com</li>
            <li className="flex items-center gap-2"><FiMapPin /> kumbakonam , Thanjavur</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 pt-6 flex justify-center text-gray-600 text-sm">
        <p>2025 © Design . All rights reserved. Powered by <a href="https://myportflio-six.vercel.app/" target="_blank">Manojkumar</a></p>
      </div>
    </footer>
  );
};

export default Footer;
