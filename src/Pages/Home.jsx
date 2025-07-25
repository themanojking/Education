import React from "react";
import Navbar from "../Components/Navbar";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { mentors, person } from "../Data";

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
                <img
                  src="/assets/home1.svg"
                  className="hidden lg:block blur-[2px] "
                />
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
                <img
                  src="/assets/home2.svg"
                  className="hidden lg:block blur-[2px] "
                />
              </div>
            </div>
            <div className="flex justify-center gap-2 p-3 md:p-8 lg:gap-10 mt-3 md:mt-10">
              {person.map((per) => (
                <div
                  key={per.id}
                  className="rounded-full"
                  style={{ backgroundColor: per.colors }}
                >
                  <img src={per.img} className=""></img>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <h1 className="text-2xl md:text-5xl font-bold">
                Meet the Next Generation of{" "}
              </h1>
              <h1 className="text-2xl md:text-5xl font-bold">
                Masterful Mentors
              </h1>
            </div>
            <div className="mt-3 md:mt-5 -space-y-1">
              <h3 className="text-lg text-gray-500 md:max-w-[75%] ">
                Connect with the next wave of expert mentors, guiding you with
                fresh perspectives, innovative insights, and proven expertise.
              </h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10 mt-10 p-2 ">
              {mentors.map((men) => (
                <div className="border-2 border-gray-400 rounded-2xl  p-4 md:w-[45%] lg:w-[30%]">
                  <img
                    style={{ backgroundColor: men.colors }}
                    className="w-[30%] rounded-full "
                    src={men.img}
                  ></img>
                  <h1 className="text-xl font-bold mt-2">{men.name}</h1>
                  <h3 className="text-lg font-semibold">{men.role}</h3>
                  <div className="flex justify-center gap-4 mt-5">
                    <button className="px-5 py-2 border-2 rounded-full text-sm lg:text-lg ">
                      {men.caption1}
                    </button>
                    <button className="px-5 py-2 border-2 rounded-full text-sm lg:text-lg ">
                      {men.caption2}
                    </button>
                    <button className="px-5 py-2 border-2 rounded-full text-sm lg:text-lg ">
                      {men.caption3}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default Home;
