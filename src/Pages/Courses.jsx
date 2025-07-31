import React from "react";
import Navbar from "../Components/Navbar";
import Categories from "../Components/Categories";
import MentorsSection from "../Components/Mentors";
import Dream from "../Components/Dream";
import Footer from "../Components/Footer";

function Courses() {
  return (
    <>
      <Navbar />
      <div className="mt-24">
        <div className="flex justify-center items-center md:gap-8 lg:gap-56">
          <center className="md:text-left  md:max-w-xl lg:max-w-3xl text-xl md:text-4xl lg:text-5xl font-bold">
            <h1>We Offer an Outstanding Learning Experience</h1>
          </center>
          <div>
            <img src="/assets/dot.svg" className="hidden md:flex"></img>
          </div>
        </div>
        <center className="text-5xl font-bold mt-10 md:mt-20">
          <h1>Explore All Courses</h1>
        </center>
        <div className="mt-8">
        <Categories />
        </div>
        <div className="mt-8">
          <MentorsSection />
        </div>
        <div className="flex justify-center mt-8">
          <Dream />
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Courses;
