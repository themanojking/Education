import React from "react";
import Navbar from "../Components/Navbar";
import TeamSection from "../Components/Teammentors";
import Dream from "../Components/Dream";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";

function Mentors() {
  return (
    <>
      <Navbar />
      <div className="mt-24">
        <center>
          <div className="flex justify-center items-center md:gap-28 lg:gap-52">
            <center className="md:text-left md:max-w-md lg:max-w-3xl text-2xl lg:text-5xl font-bold ">
              <h1>Meet Our Industry’s Leading Expert Mentors</h1>
            </center>
            <div>
              <img src="/assets/dot.svg" className="hidden md:flex"></img>
            </div>
          </div>
        </center>
        <div className="mt-10">
          <TeamSection />
        </div>
        <div>
          <Faq />
        </div>
        <div>
          <Dream />
        </div>
        <div className="mt-20">
        <Footer />
        </div>  
      </div>
    </>
  );
}

export default Mentors;
