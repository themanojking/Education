import React from "react";
import Navbar from "../Components/Navbar";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlineCategory } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { jobs, mentors, person } from "../Utility/Data";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Faq from "../Components/Faq";
import Dream from "../Components/Dream";

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
            <div className="mt-5">
              <button className="flex items-center gap-3 px-4 py-3 bg-green-700 text-white font-bold rounded-full">
                View all mentors{" "}
                <MdOutlineArrowOutward className="text-3xl font-bold bg-white text-black rounded-full " />{" "}
              </button>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl md:text-6xl font-bold">
                Become In Demand On the{" "}
              </h1>
              <h1 className="text-2xl md:text-6xl font-bold">
                Job Market Today !
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-5 md:gap-8 mt-10">
              <Link to='/categories'><button className="flex items-center gap-3 px-4 py-3 rounded-full bg-green-600 text-white text-xl font-bold">
                <BiCategoryAlt /> categories
              </button></Link>
              <Link to='/development'><button className="flex items-center gap-3 px-4 py-3 rounded-full  border-2 text-xl font-bold">
                <FaCode /> Development
              </button></Link>
              <button className="flex items-center gap-3 px-4 py-3 rounded-full border-2 text-xl font-bold">
                <MdOutlineCategory /> UI/UX Design
              </button>
              <button className="flex items-center gap-3 px-4 py-3 rounded-full border-2 text-xl font-bold">
                <RiCheckboxMultipleBlankLine /> Project Management
              </button>
              <button className="flex items-center gap-3 px-4 py-3 rounded-full border-2 text-xl font-bold">
                <FaDollarSign /> Accounting
              </button>
              <button className="flex items-center gap-3 px-4 py-3 rounded-full border-2 text-xl font-bold">
                <MdOutlineAnalytics /> Marketing
              </button>
            </div>
            <div className="flex flex-wrap  justify-center items-center gap-10 mt-14 ">
              {jobs.map((job) => (
                <div className="border-2 w-[90%] md:w-[40%] lg:w-[30%] rounded-xl">
                  <img src={job.img} className=""></img>
                  <div className="flex justify-between mt-2 p-4">
                    <div>
                      <button className="px-3 py-2 border-2 rounded bg-gray-500 text-white font-semibold">
                        {job.caption1}
                      </button>
                    </div>
                    <div className="flex justify-center items-center gap-10">
                      <IoCartOutline className="bg-green-600 p-1 text-white text-4xl font-bold rounded" />
                      <h2 className="text-xl text-green-600 font-semibold">
                        {job.rate}
                      </h2>
                    </div>
                  </div>
                  <h1 className="flex justify-start ml-5 text-xl font-bold">{job.role}</h1>
                  <div className="flex justify-evenly gap-28 mt-3 text-gray-600 font-semibold p-2">
                    <h4 className="flex justify-center items-center gap-3">
                      <IoMdTime /> {job.week}
                    </h4>
                    <h4 className="flex justify-center items-center gap-3">
                      <HiOutlineDocumentText /> {job.lectures}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-2">
                <h1 className="text-xl md:text-5xl font-bold">Key Takeaways from Successful</h1>
                <h1 className="text-xl lg:text-5xl font-bold">Graduate Experiences</h1>
            </div>
            <div>
              <Faq />
            </div>
            <Dream />
            <Footer />
            
          </center>
        </div>
      </div>
    </>
  );
}

export default Home;
