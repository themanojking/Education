import React from "react";
import Navbar from "../Components/Navbar";
import { FaAward } from "react-icons/fa6";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <center className="mx-8">
          <div className="flex justify-around md:gap-36 ">
            <div className="max-w-3xl text-2xl md:text-6xl font-bold ">
              <h1 className="text-left ">
                Providing Unrivaled Quality in Online Courses
              </h1>
            </div>
            <div>
              <img src="/assets/dot.svg" className="mt-20 lg:mt-10 hidden md:block"></img>
            </div>
          </div>
          <div className="bg-green-700 md:w-[90%] rounded-3xl mt-20">
            <div className="flex flex-wrap justify-center gap-10 lg:gap-40 mt-10 p-10">
              <div className="border-2 lg:w-[30%] rounded-3xl">
                <img src="/assets/about3.jpg" className="rounded-2xl"></img>
              </div>
              <div className="border-2 bg-white lg:w-[35%] lg:h-[50%] p-2 rounded-2xl lg:mt-28">
                <div className="text-left flex justify-between items-center gap-4 p-3">
                  <h1 className="text-5xl font-bold text-gray-900">20+</h1>
                  <FaAward className="text-green-600 text-3xl" />
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-semibold mt-3">
                    Years of Experience
                  </h2>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                    Leveraging 10+ years in the field, our online courses offer
                    expertly developed content, designed to support learners
                    with engaging and impactful education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default AboutUs;
