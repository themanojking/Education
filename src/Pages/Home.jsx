import React from "react";
import Navbar from "../Components/Navbar";
import { FaGraduationCap } from "react-icons/fa";
import img1 from "../assets/home1.svg";
import img2 from "../assets/home2.svg";
import { IoIosSearch } from "react-icons/io";

function Home() {
  return (
    <>
      <Navbar />
      <div className="">
        <div>
          <center className=" mt-10 md:mt-20">
            <div className="flex justify-center items-center gap-3 bg-red-500 w-[80%] md:w-[40%] lg:w-[20%] rounded-full p-2">
              <FaGraduationCap className="text-green-600 text-3xl" />
              <h2 className="text-white text-xl font-bold">
                Learn From Top Experts
              </h2>
            </div>
            <div className="md:space-y-3 mt-3">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
                Building Futures Together{" "}
              </h1>
              <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold">
                By Empowering Minds
              </h1>
            </div>
            <div className="flex md:flex-row justify-center gap-5 md:gap-0 lg:gap-x-0.5 mt-1 md:mt-8 text-gray-500 font-semibold">
              <div>
                <img src={img1} className="hidden lg:block blur-[2px] " />
              </div>
              <div className="mt-3 md:mt-0">
                <h3 className="text-lg md:max-w-[75%]">
                  Join us in shaping a brighter future by nurturing potential,
                  empowering minds, and fostering growth through education and
                  collaboration.
                </h3>

                <div className="flex justify-around items-center gap-3 p-2 border-2 border-gray-500 rounded-full mx-10 md:mx-0 md:w-[50%] lg:w-[30%] mt-4 md:mt-8">
                  <input
                    placeholder="e.g. FullStack Developer"
                    className="outline-none"
                  />
                  <IoIosSearch className="text-2xl" />
                </div>
              </div>
              <div>
                <img src={img2} className="hidden lg:block blur-[2px] " />
              </div>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default Home;
