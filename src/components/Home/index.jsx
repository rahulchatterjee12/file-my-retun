import React from "react";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Brands from "./Brands";
import Highlights from "./Highlights";
import Services from "./Services/Services";
import Benefits from "./Benefits";
import Youtube from "./Youtube";
import Plans from "./Plans";
import Testimonials from "./Testimonials";
import Story from "./Story";

const HomePage = () => {
  return (
    <div className="mt-16">
      <Hero />
      <Brands />
      <Hero2 />
      <Highlights />
      <div className="flex justify-center mt-[20px] mb-[30px]">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent md:w-[1134px] w-[293px]" />
      </div>
      <div className="bg-[#F8F8FD]">
        <div className="rounded-b-[40px] bg-white md:pb-[85px]">
          <Services />
          <Benefits />
        </div>
        <Youtube />
      </div>
      <Plans />
      <Story />
      <div className="flex justify-center mt-[45px] mb-[45px]">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent md:w-[1134px] w-[293px]" />
      </div>
      <Testimonials />
    </div>
  );
};
export default HomePage;
