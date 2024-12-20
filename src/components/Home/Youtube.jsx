import React from "react";
import MobileCarousel from "../common/MobileCarousel";

const Youtube = () => {
  return (
    <div className="mt-[24px] md:mt-[70] bg-[#F8F8FD] py-10">
      <h3 className="md:text-[34px] text-[18px] font-bold text-center">
        FileMyReturn on YouTube for{" "}
        <span className="text-[#FF0000]">insightful Financial content! </span>
      </h3>

      <div className="md:flex hidden justify-center gap-[37px] mt-[45px]">
        <div className="flex justify-center items-center w-[800px] h-[560px] rounded-[10px] border-[1px] border-gray-200">
          <div className="w-[97%] h-[97%] bg-white rounded-[10px] border-[1px] border-gray-100"></div>
        </div>
        <div className="flex justify-between flex-col">
          <div className="flex justify-center items-center w-[370px] h-[260px] rounded-[10px] border-[1px] border-gray-200">
            <div className="w-[97%] h-[97%] bg-white rounded-[10px] border-[1px] border-gray-100"></div>
          </div>
          <div className="flex justify-center items-center w-[370px] h-[260px] rounded-[10px] border-[1px] border-gray-200">
            <div className="w-[97%] h-[97%] bg-white rounded-[10px] border-[1px] border-gray-100"></div>
          </div>
        </div>
      </div>

      <div className="md:hidden ">
        <MobileCarousel>
          <div className=" flex gap-4 px-4">
            <div className="flex justify-center items-center min-w-[282px] min-h-[201px] rounded-[10px] border-[1px] border-gray-200">
              <div className="w-[97%] h-[97%] bg-white rounded-[10px] border-[1px] border-gray-100"></div>
            </div>
            <div className="flex justify-center items-center min-w-[282px] h-[201px] rounded-[10px] border-[1px] border-gray-200">
              <div className="w-[97%] h-[97%] bg-white rounded-[10px] border-[1px] border-gray-100"></div>
            </div>
            <div className="flex justify-center items-center min-w-[282px] h-[201px] rounded-[10px] border-[1px] border-gray-200">
              <div className="w-[97%] h-[97%] bg-white rounded-[10px] border-[1px] border-gray-100"></div>
            </div>
          </div>
        </MobileCarousel>
      </div>

      <div className="md:h-[155px] md:px-[125px] md:py-[49px] bg-[#4640DE] md:mt-[70px] md:flex hidden justify-between">
        <div>
          <h3 className="text-[28px] text-white">Need more help?</h3>
          <p className="text-[#BABABA] text-[14px]">
            Go through all our video's and increase your financial literacy
          </p>
        </div>
        <button className="bg-white text-[#4640DE] px-[30px] py-[20px] rounded-md text-[17px]">
          More videos
        </button>
      </div>
    </div>
  );
};

export default Youtube;
