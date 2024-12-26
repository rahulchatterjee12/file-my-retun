import React from "react";

const Hero2 = () => {
  return (
    <div className="bg-[#DDDDFE] flex justify-around  pt-8">
      <img
        src="assets/images/Home/Businessman.png"
        className="w-[110px] h-[208px] md:h-[537px] md:w-[537px]"
      />
      <div className=" w-[50%] md:w-[40%] md:mt-8 mt-4  text-center mb-5">
        <h1 className=" text-[20px] md:text-[55px] font-bold text-wrap text-start">
          Finance planning is Easy with a{" "}
          <span className="text-[#4640DE]"> personal CFO</span>
        </h1>
        <p className="font-semibold md:text-[16px] text-[10px] mt-4">
          Get access to Financial Planners who curate a tailore goal-based
          investment strategy just for you.
        </p>
        <div className="flex justify-center mt-6">
          <button className="px-3 py-2 text-[12px] md:text-[20] bg-[#4640DE] border-[2px] border-white text-white rounded-[11px] shadow-sm">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
