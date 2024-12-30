import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#DDDDFE] flex justify-around gap-[50px] px-[10px] md:px-[138px]  pt-8 w-full items-start">
      <img
        src="assets/images/Home/hero1.png"
        className="hidden md:block w-[90px] h-[350px] mt-[50px] md:w-[420px] mr-4 overflow-hidden"
      />
      <div className="md:mt-8 mt-4 text-start md:text-center mb-5">
        <h1 className=" text-[20px] md:text-[55px] font-bold text-wrap  ">
          Effortless <span className="text-[#4640DE]">Tax Filing </span>
          Made Possible
        </h1>
        <p className="font-semibold md:text-[16px] text-[10px] mt-[12px] text-[#666666]">
          Most Reliable, Accurate Tax Expert Assisted ITR Filing Registered
          E-Return Intermediary License Holder
        </p>
        <div className="flex md:justify-center mt-[48px]">
          <button className="px-[24px] text-[20px] w-[156px] h-[47px] md:text-[20px] bg-[#4640DE] border-[2px] border-white text-white rounded-[11px] shadow-[6px_4px_22px_rgba(0,0,0,0.25)]">
            Get Started
          </button>
        </div>
      </div>
      <img
        src="assets/images/Home/hero2.png"
        className="w-[90px] h-[210px] md:h-[369px] mt-[30px] md:w-[190px]"
      />
    </div>
  );
};

export default Hero;
