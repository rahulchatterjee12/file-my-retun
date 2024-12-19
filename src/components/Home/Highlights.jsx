import React from "react";

const Highlights = () => {
  return (
    <div className="md:mt-[55px] mt-[25px]">
      <h2 className="text-center text-[20px] md:text-[40px] font-bold">
        Taxation handled <span className="text-[#4640DE]"> over seas.</span>
      </h2>
      <h5 className="text-center md:text-[20px] text-[#656565] font-semibold">
        You focus on what matters the most
      </h5>

      <div className="md:flex justify-around mt-[40px] hidden">
        <div>
          <h3 className="text-[#1D1D1B] text-center font-bold md:text-[48px]">
            3,500k+
          </h3>
          <h5 className="text-[#666666] text-center font-semibold md:text-[20]">
            Income Tax Returns Filed
          </h5>
        </div>
        <div>
          <h3 className="text-[#1D1D1B] text-center font-bold md:text-[48px]">
            120+
          </h3>
          <h5 className="text-[#666666] text-center font-semibold md:text-[20]">
            Companies <span className="text-[#293854]">Trusts us</span>
          </h5>
        </div>
        <div>
          <h3 className="text-[#1D1D1B] text-center font-bold md:text-[48px]">
            500k+
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
              120+
            </h3>
            <h5 className="text-[#666666] text-center font-semibold text-[10px] md:text-[20]">
              Companies Trusts us
            </h5>
          </div>
          <div>
            <h3 className="text-[#1D1D1B] text-center font-bold text-[18px] md:text-[48px]">
              500K +
            </h3>
            <h5 className="text-[#666666] text-center font-semibold text-[10px] md:text-[20]">
              Individuals tax returns filled
            </h5>
          </div>
        </div>

        <div className="mt-[12px]">
          <h3 className="text-[#1D1D1B] text-center font-bold text-[24px] md:text-[48px]">
            3,500k+
          </h3>
          <h5 className="text-[#666666] text-center font-semibold text-[10px] md:text-[20]">
            Income Tax Returns Filed
          </h5>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="assets/images/Home/line.png"
          alt=""
          className="items-center w-[293px] md:w-[1134px] mt-[24px] md:mt-[70px]"
        />
      </div>
    </div>
  );
};

export default Highlights;
