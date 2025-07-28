// JobCard.jsx
import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

function JobCard({ img, caption1, rate, role, week, lectures }) {
  return (
    <div className="border-2 w-[90%] md:w-[40%] lg:w-[30%] rounded-xl">
      <img src={img} alt={role} className="w-full h-50 object-cover rounded-xl" />
      <div className="flex justify-between mt-2 p-4">
        <button className="px-3 py-2 border-2 rounded bg-gray-500 text-white font-semibold">
          {caption1}
        </button>
        <div className="flex justify-center items-center gap-4">
          <IoCartOutline className="bg-green-600 p-1 text-white text-4xl font-bold rounded" />
          <h2 className="text-xl text-green-600 font-semibold">{rate}</h2>
        </div>
      </div>
      <h1 className="flex justify-start ml-5 text-xl font-bold">{role}</h1>
      <div className="flex justify-evenly gap-8 mt-3 text-gray-600 font-semibold p-2">
        <h4 className="flex justify-center items-center gap-3">
          <IoMdTime /> {week}
        </h4>
        <h4 className="flex justify-center items-center gap-3">
          <HiOutlineDocumentText /> {lectures}
        </h4>
      </div>
    </div>
  );
}

export default JobCard;
