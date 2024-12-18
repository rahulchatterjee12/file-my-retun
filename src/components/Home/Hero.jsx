import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#DDDDFE] flex justify-around   pt-8 w-full items-end">
      <img
        src="assets/images/home/hero1.png"
        className="hidden md:block w-[90px] h-[210px] md:h-[400px] md:w-[250px] mr-4"
      />
      <div className=" w-[60%] md:w-[35%] md:mt-8 mt-4 text-start md:text-center mb-5">
        <h1 className=" text-[20px] md:text-[55px] font-bold text-wrap  ">
          Effortless <span className="text-[#4640DE]">Tax Filing </span>
          Made Possible
        </h1>
        <p className="font-semibold md:text-[16px] text-[10px] mt-4">
          Most Reliable, Accurate Tax Expert Assisted ITR Filing Registered
          E-Return Intermediary License Holder
        </p>
        <div className="flex md:justify-center mt-6">
          <button className="px-3 py-2 text-[12px] md:text-[20] bg-[#4640DE] border-[2px] border-white text-white rounded-[11px] shadow-sm">
            Get Started
          </button>
        </div>
      </div>
      <img
        src="assets/images/home/hero2.png"
        className="w-[90px] h-[210px] md:h-[400px] md:w-[190px]"
      />
    </div>
  );
};

export default Hero;
