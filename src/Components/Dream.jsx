import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function Dream() {
  return (
    <>
      <div className="border-2 border-black rounded-2xl p-5 lg:w-[70%] mx-5">
        <center>
            <div className="max-w-2xl text-2xl lg:text-4xl">
          <h1 className="font-bold">Join Driven Professionals & Launch Your Dream Career Today!</h1>
            </div>
          <h4 className="max-w-2xl mt-4 text-md font-semibold text-gray-500">
            Connect with a network of driven professionals, gain valuable
            insights, and access resources that propel you toward your dream
            career.
          </h4>
          <div>
            <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">
                <input className="outline-none border-2 border-gray-500 rounded-full md:w-[50%] lg:w-[40%] px-5 py-3 placeholder:text-lg font-semibold" placeholder="Enter your email"></input>
                <button className="flex justify-between items-center gap-5 px-3 py-2 bg-green-700 text-white font-semibold rounded-full">Join with us <MdOutlineArrowOutward className="text-3xl font-bold bg-white text-black rounded-full " /></button>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default Dream;
