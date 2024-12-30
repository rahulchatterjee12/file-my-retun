"use client";
import React from "react";
import CountUp from "react-countup";

const Highlights = () => {
  return (
    <div className="md:mt-[55px] mt-[25px]">
      <h2 className="text-center text-[20px] md:text-[40px] font-bold">
        Taxation handled <span className="text-[#4640DE]"> over seas.</span>
      </h2>
      <h5 className="text-center md:text-[20px] text-[#656565] font-semibold mt-[4px]">
        You focus on what matters the most
      </h5>

      <div className="md:flex justify-between gap-[220px] mx-[200px] mt-[48px] hidden">
        <div>
          <h3 className="text-[#1D1D1B] text-center font-bold md:text-[48px] text-nowrap">
            <CountUp start={0} end={3500} duration={2} /> <span>K+</span>
          </h3>
          <h5 className="text-[#666666] text-center font-semibold md:text-[20]">
            Income Tax Returns Filed
          </h5>
        </div>
        <div>
          <h3 className="text-[#1D1D1B] text-center font-bold md:text-[48px]">
            <CountUp start={0} end={120} duration={2} /> <span>+</span>
          </h3>
          <h5 className="text-[#666666] text-center font-semibold md:text-[20]">
            Companies <span className="text-[#293854]">Trusts us</span>
          </h5>
        </div>
        <div>
          <h3 className="text-[#1D1D1B] text-center font-bold md:text-[48px]">
            <CountUp start={0} end={500} duration={2} /> <span>K+</span>
          </h3>
          <h5 className="text-[#666666] text-center font-semibold md:text-[20]">
            Individuals income Tax Returns Filed
          </h5>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex justify-around mt-[26px]">
          <div>
            <h3 className="text-[#1D1D1B] text-center font-bold text-[18px] md:text-[48px]">
              <CountUp start={0} end={120} duration={2} /> <span>+</span>
            </h3>
            <h5 className="text-[#666666] text-center font-semibold text-[10px] md:text-[20]">
              Companies Trusts us
            </h5>
          </div>
          <div>
            <h3 className="text-[#1D1D1B] text-center font-bold text-[18px] md:text-[48px]">
              <CountUp start={0} end={500} duration={2} /> <span>K+</span>
            </h3>
            <h5 className="text-[#666666] text-center font-semibold text-[10px] md:text-[20]">
              Individuals tax returns filled
            </h5>
          </div>
        </div>

        <div className="mt-[12px]">
          <h3 className="text-[#1D1D1B] text-center font-bold text-[24px] md:text-[48px]">
            <CountUp start={0} end={3500} duration={2} /> <span>K+</span>
          </h3>
          <h5 className="text-[#666666] text-center font-semibold text-[10px] md:text-[20]">
            Income Tax Returns Filed
          </h5>
        </div>
      </div>
      <div className="flex justify-center mt-[54px]">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent md:w-[1134px] w-[293px]" />
      </div>
    </div>
  );
};

export default Highlights;
