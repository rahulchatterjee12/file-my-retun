import React from "react";

const Hero2 = () => {
  return (
    <>
      <div className="bg-[#DDDDFE] hidden md:flex justify-between items-center px-[10px] md:px-[105px] gap-[25px]  pt-8">
        <img
          src="assets/images/Home/Businessman.png"
          className="w-[110px] h-[208px] md:h-[537px] md:w-[537px]"
        />
        <div className=" w-[50%] md:w-[665px] md:mt-8 mt-4  text-center mb-5">
          <h1 className="relative text-[20px] md:text-[55px] font-bold text-wrap text-right md:text-center">
            Finance planning is Easy with a{" "}
            <span className="text-[#4640DE]"> personal CFO</span>
            <img
              src="/assets/images/Home/coins.png"
              alt=""
              className="absolute w-[31px] h-[33px] md:w-[67px] md:h-[70px] bottom-2 md:bottom-0 md:-right-[20px]"
            />
          </h1>
          <p className="font-semibold md:text-[16px] text-[10px] mt-[12px] text-[#666666]">
            Get access to Financial Planners who curate a tailore goal-based
            investment strategy just for you.
          </p>
          <div className="flex justify-center mt-[51px]">
            <button className="px-[24px] text-[20px] w-[156px] h-[47px] md:text-[20px] bg-[#4640DE] border-[2px] border-white text-white rounded-[11px] shadow-[6px_4px_22px_rgba(0,0,0,0.25)]">
              Know more
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex items-center justify-between rounded-b-[20px] bg-[#DFDFFE] px-[15px] pb-[28px] pt-[8px] gap-[21px] shadow-[0px_4px_22px_rgba(0,0,0,0.25)]">
          <img
            src="/assets/images/Home/businessman-phone.png"
            alt=""
            className="mt-[41px] w-[128px] h-[200px]"
          />
          <div className="pb-[20px] w-[200px]">
            <h1 className="relative text-[18px] font-bold text-wrap text-end">
              Finance planning <br /> is Easy with a{" "}
              <span className="text-[#4640DE]"> personal CFO</span>
              <img
                src="/assets/images/Home/coins.png"
                alt=""
                className="absolute w-[31px] h-[33px] left-7 bottom-2"
              />
            </h1>
            <p className="text-[8px] mt-[8px] text-end">
              Get access to Financial Planners who curate a tailor goal-based
              investment strategy just for you.
            </p>
            <button className="text-white mt-[34px] ml-[69px] bg-[#4640DE] rounded-[11px] text-[12px] border-white border-[2px] py-[8px] px-[16px] shadow-[6px_4px_22px_rgba(0,0,0,0.25)]">
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
