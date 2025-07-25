import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const onclick = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <div className="bg-white sm:py-[16px] sm:px-[48px] py-2 px-8 flex justify-between items-center shadow-2xl flex-wrap rounded-b-3xl ">
        <div className="text-lg font-bold w-[200px] max-sm:w-[160px]">
          <h1>Education</h1>
        </div>
        <div className="nav-items max-lg:hidden">
          <ul className=" flex gap-6 text-lg cursor-pointer font-bold ">
            <Link to='/'><li className="hover:text-[#FD5C56]">Home</li></Link>
            <Link to='/pages'><li className="hover:text-[#FD5C56]">Pages</li></Link>
            <Link to='/courses'><li className="hover:text-[#FD5C56]">Courses</li></Link>
            <Link to='/mentors'><li className="hover:text-[#FD5C56]">Mentors</li></Link>
            <Link to='/blogs'><li className="hover:text-[#FD5C56]">Blogs</li></Link>
            <Link to='/aboutus'><li className="hover:text-[#FD5C56]">About Us</li></Link>
          </ul>
        </div>
        <div className="sm:hidden cursor-pointer">
          <CgProfile className="text-3xl" />
        </div>
        <div className="md:hidden">
          {!open ? <IoMdMenu className="text-3xl" onClick={onclick} /> :  <IoMdClose className="text-3xl" onClick={onclick} />}
        </div>
        <div className="flex justify-around items-center border-1 rounded-lg border-gray-600  space-x-2 max-sm:my-4">
          <div className=" bg-white rounded-lg px-2">
            <input
              type="text"
              placeholder="Search Your Destination.."
              className="outline-none"
            />
          </div>
          <div className="rounded-md bg-[#FD5C56] hover:bg-green-500 ">
            <CiSearch className="text-[32px]  text-white p-1" />
          </div>
        </div>
        <div className="flex">
          <IoCartOutline className="text-3xl cursor-pointer" />
        </div>
        <div className="max-md:hidden cursor-pointer lg:hidden">
          <CgProfile className="text-3xl" />
        </div>
        <div className="max-md:hidden lg:hidden cursor-pointer">
          <IoMdMenu className="text-3xl" onClick={onclick} />
        </div>
        <div className="space-x-4 max-lg:hidden">
          <button className="text-lg font-bold border-2 border-white hover:border-[#FD5C56] py-[6px] px-[20px] rounded-lg cursor-pointer">
            Login
          </button>
          <button className="bg-[#FD5C56] py-[6px] px-[20px] rounded-lg text-lg text-white font-bold cursor-pointer">
            SignUp
          </button>
        </div>
      </div>

      <div
        id="mobilmenu"
        className={`lg:hidden w-full h-screen top-0 z-50 bg-white   shadow-2xl p-0 m-0 transition-all duration-300 ease-in-out absolute  ${
          open ? "" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center mx-4 my-2"> 
          <h1 className="text-lg font-bold w-[150px]">Education</h1>
          <IoMdClose className="text-3xl" onClick={onclick} />
        </div>
        <hr className="w-[90%] m-auto text-gray-500ccnn"/>
        <ul className="decoration-none text-lg cursor-pointer font-bold space-y-4 text-center mt-4 mx-4">
          <Link to='/'><li className="hover:bg-[#FD5C56] hover:text-white">Home</li></Link>
          <Link to='/pages'><li className="hover:bg-[#FD5C56] hover:text-white">Pages</li></Link>
          <Link to='/courses'><li className="hover:bg-[#FD5C56] hover:text-white">Courses</li></Link>
          <Link to='/mentors'><li className="hover:bg-[#FD5C56] hover:text-white">Mentors</li></Link>
          <Link to='/blogs'><li className="hover:bg-[#FD5C56] hover:text-white">Blogs</li></Link>
          <Link to='/aboutus'><li className="hover:bg-[#FD5C56] hover:text-white">About Us</li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;