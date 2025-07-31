import React from "react";
import { teamMembers } from "../Utility/Data";

function TeamSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Meet Our Team
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden group"
          >
            {/* Image Container with Background */}
            <div
              className={`relative w-full h-72 flex items-center justify-center ${member.bgColor}`}
            >
              <img
                src={member.img}
                alt={member.name}
                className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {/* Black Gradient Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Social Icons */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {member.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    className="border border-white text-white text-xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="text-center py-4">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
