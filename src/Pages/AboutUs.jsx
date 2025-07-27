import React from "react";
import Navbar from "../Components/Navbar";
import { FaAward } from "react-icons/fa6";
import { RxPerson } from "react-icons/rx";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import AchievementSection from "../Components/Achievements";
import LearningExperience from "../Components/Experience";
import MentorsSection from "../Components/Mentors";
import Faq from "../Components/Faq";
import Dream from "../Components/Dream";
import Footer from "../Components/Footer";

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
              <img
                src="/assets/dot.svg"
                className="mt-20 lg:mt-10 hidden md:block"
              ></img>
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
          <div className="flex flex-wrap justify-center lg:gap-32 mt-14">
            <div>
              <h1 className="text-left max-w-xl text-3xl md:text-5xl font-bold">
                Why Choose Us for Your Learning Journey
              </h1>
              <h3 className="text-left md:max-w-xl text-sm md:text-lg font-semibold text-gray-600 mt-4">
                Our team combines innovation, expertise, and a client-centered
                approach, delivering projects with outstanding quality,
                meticulous attention to detail, and a focus on meaningful
                growth.
              </h3>
              <div className="text-left  mt-10">
                <div className="flex justify-start items-center gap-4">
                  <RxPerson className="text-3xl font-bold bg-green-200 text-green-800 rounded-full p-2 w-10 h-10" />
                  <h1 className="text-xl font-bold">Expert-led courses</h1>
                </div>
                <h4 className="max-w-lg text-left text-lg font-semibold text-gray-600">
                  Learn from experienced professionals in fields like marketing,
                  design, development, finance, and more.
                </h4>
              </div>
              <div className="text-left  mt-5">
                <div className="flex justify-satrt items-center gap-4">
                  <LuGraduationCap className="text-3xl font-bold bg-green-200 text-green-800 rounded-full p-2 w-10 h-10" />
                  <h1 className="text-xl font-bold">
                    Personalized learning paths
                  </h1>
                </div>
                <h4 className="max-w-lg text-left text-lg font-semibold text-gray-600">
                  Tailor your journey with courses that align with your unique
                  goals and pace.
                </h4>
              </div>
              <div className="text-left  mt-5">
                <div className="flex justify-satrt items-center gap-4">
                  <FaChartLine className="text-3xl font-bold bg-green-200 text-green-800 rounded-full p-2 w-10 h-10" />
                  <h1 className="text-xl font-bold">Interactive learning</h1>
                </div>
                <h4 className="max-w-lg text-left text-lg font-semibold text-gray-600">
                  Engage with multimedia content, quizzes, and assignments
                  designed to make learning dynamic and enjoyable.
                </h4>
              </div>
            </div>
            <div className="lg:w-[40%] flex justify-center items-center mt-10 lg:mt-0 ">
              <img src="/assets/img5.jpg" className="rounded-3xl"></img>
            </div>
          </div>
          <div className="mt-10">
            <AchievementSection />
          </div>
          <section className="bg-white py-10 px-4 sm:px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-purple-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                {/* Text */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    Become an Instructor?
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    Become an Instructor: Join us to share your expertise,
                    inspire learners, and shape the future of education
                    together.
                  </p>
                  <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition">
                    Join with Us
                    <span className="bg-white text-black rounded-full p-1">
                      <MdOutlineArrowOutward className="w-4 h-4" />
                    </span>
                  </button>
                </div>
                {/* Image */}
                <div className="w-32 sm:w-40">
                  <img
                    src="/assets/img7.png"
                    alt="Instructor"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-pink-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                {/* Text */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    Get Online Courses
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    Join as a student to access online courses, gain in-demand
                    skills, and build a strong foundation for future success.
                  </p>
                  <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition">
                    Start Learning
                    <span className="bg-white text-green-600 rounded-full p-1">
                      <MdOutlineArrowOutward className="w-4 h-4" />
                    </span>
                  </button>
                </div>
                {/* Image */}
                <div className="w-32 sm:w-40">
                  <img
                    src="/assets/img8.png"
                    alt="Student"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="mt-10">
            <LearningExperience />
          </div>
          <div>
            <MentorsSection />
          </div>
          <div>
            <Faq />
          </div>
          <div>
            <Dream />
          </div>
        </center>
          <div className="mt-20">
            <Footer />
          </div>
      </div>
    </>
  );
}

export default AboutUs;
