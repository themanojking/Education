import React from "react";
import { ArrowUpRight } from "lucide-react";

const LearningExperience = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-16 flex flex-col md:flex-row items-center md:items-center gap-10">
      
      {/* Left Side: Image with stats card */}
      <div className="relative  md:w-1/2">
        <div className="rounded-2xl ">
          <img
            src="/assets/img9.jpg" // Replace with your image
            alt="Learning Experience"
            className="lg:w-[70%] rounded-2xl"
          />
        </div>
        {/* Overlapping Card */}
        <div className="absolute bottom-2 md:bottom-4 right-4 bg-white rounded-xl shadow-lg p-4 sm:p-6 w-40 sm:w-48">
          <p className="text-sm text-gray-500">Average Class Completion Rate</p>
          <p className="text-green-600 text-xs mt-1">↑ 65+</p>
          <h3 className="text-3xl font-bold mt-2">95%</h3>
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
          We Ensure an Exceptional <br className="hidden sm:block" /> Learning Experience
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          We guarantee an exceptional learning experience with expert instructors, interactive lessons,
          and hands-on opportunities designed to ensure student success and growth.
        </p>
        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          <div>
            <h3 className="text-2xl font-bold">100,000+</h3>
            <p className="text-gray-600 text-sm">
              Students effectively enhanced digital skills using our platform.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">20,000+</h3>
            <p className="text-gray-600 text-sm">
              Students have built successful careers in various tech companies.
            </p>
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex justify-center md:justify-normal">
        <button className="flex  items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition">
          Explore Courses <ArrowUpRight className="w-5 h-5" />
        </button>
        </div>
      </div>
    </section>
  );
};

export default LearningExperience;
