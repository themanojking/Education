import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Bestmentors } from "../Utility/Data";

const MentorsSection = () => {
  

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          Learn from the Best Talent in the Industry
        </h2>
        <button className="mt-4 md:mt-0 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
          View All Mentors
          <span className="bg-white text-black rounded-full p-1">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Bestmentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 p-6 text-center"
          >
            <img
              src={mentor.img}
              alt={mentor.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-gray-100"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              {mentor.name}
            </h3>
            <p className="text-gray-500">{mentor.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MentorsSection;
