import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const AchievementSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white py-8 px-4 sm:px-6 md:px-16 flex flex-col md:flex-row justify-center items-center md:items-center gap-8 lg:gap-36">
      {/* Left Side: Video Thumbnail */}
      <div className="w-full md:w-1/2 max-w-md">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <img
            src="/assets/img6.webp" // Replace with your image
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          {/* Play Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-md hover:scale-110 transition"
          >
            <FaPlay className="text-black text-xl" />
          </button>
        </div>
        {/* Caption outside image */}
        <div className="bg-white rounded-b-lg text-center shadow-md mt-3 py-3">
          <h3 className="font-semibold text-lg">
            Making Career Impact Together
          </h3>
          <p className="text-gray-500 text-sm">Founder, MonksHub</p>
        </div>
      </div>

      {/* Right Side: Text & Stats */}
      <div className="w-full lg:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-snug">
          A Journey of Achievement <br className="hidden sm:block" /> and
          Digital Growth
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-orange-100 rounded-lg p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold">15,000+</h3>
            <p className="text-gray-700 text-sm sm:text-base">Graduate</p>
          </div>
          <div className="bg-yellow-100 rounded-lg p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold">1,25,000+</h3>
            <p className="text-gray-700 text-sm sm:text-base">Active User</p>
          </div>
          <div className="bg-green-100 rounded-lg p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold">90%</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Course Complete Rate
            </p>
          </div>
          <div className="bg-pink-100 rounded-lg p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold">9,000+</h3>
            <p className="text-gray-700 text-sm sm:text-base">Job Placement</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
            >
              <IoClose className="text-2xl text-black" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementSection;
