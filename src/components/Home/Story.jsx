import React from "react";

const Story = () => {
  return (
    <div className="md:px-[120px]  mt-[40px]">
      <div className="text-[20px] font-bold md:text-[40px] md:text-start text-center text-[#666666]">
        <h3>What services does</h3>
        <h3>File my return offer ?</h3>
      </div>
      <div className="md:grid md:grid-cols-3 md:overflow-hidden overflow-scroll gap-[56px] flex mx-2 my-3 py-2 md:mt-[70px]">
        <div className="md:w-[382px] h-[256px] min-w-[308px] border border-black/10 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] px-4 rounded-[8px]">
          <img
            src="assets/images/star.png"
            alt="star"
            className="w-[59px] h-[59px] m-4"
          />
          <h3 className="md:text-[24px]">
            Authorized
            <br />
            E-Return Intermediary
          </h3>
          <p className="text-[16px] text-[#666666] md:mt-[16px]">
            Registered e-Return intermediary by Income Tax Department License No
            ERIP001268
          </p>
        </div>
        <div className="md:w-[382px] h-[256px] min-w-[308px]  px-[15px] py-[10px] border-t-[2px] border-t-[#e1e0e0]">
          <h3 className="text-[18px] md:text-[24px]">
            Filed More Than
            <br /> <span className="text-[#4640DE]">3.5 Mn </span>
            Income Tax Returns
          </h3>
          <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
            5 lac individuals have been filing IT return via our portal every
            year
          </p>
        </div>
        <div className="md:w-[382px] h-[256px] min-w-[308px]  px-[15px] py-[10px] border-t-[2px] border-t-[#e1e0e0]">
          <h3 className="text-[18px] md:text-[24px]">
            Pioneers In ITR Filing
            <br />
            Since
            <span className="text-[#4640DE]"> 2002</span>
          </h3>
          <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
            Offline presence of over 2 decades and Online Portal made live in
            2015
          </p>
        </div>
        <div className="md:w-[382px] h-[169px] min-w-[308px]  px-[15px] py-[10px] border-t-[2px] border-t-[#e1e0e0]">
          <h3 className="text-[18px] md:text-[24px]">
            Dedicated Inhouse Team <br />
            Of Tax Experts
          </h3>
          <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
            Team of CA's, MBA's, CFA's with an average experience of 20 ys +
          </p>
        </div>
        <div className="md:w-[382px] h-[169px] min-w-[308px]  px-[15px] py-[10px] border-t-[2px] border-t-[#e1e0e0]">
          <h3 className="text-[18px] md:text-[24px]">Data Privacy</h3>
          <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
            Our AES-256 Encrypted System ensures Full-Proof Data & Identity
            Security
          </p>
        </div>
        <div className="md:w-[382px] h-[169px] min-w-[308px]  px-[15px] py-[10px] border-t-[2px] border-t-[#e1e0e0]">
          <h3 className="text-[18px] md:text-[24px]">
            Partnering With Over
            <br />
            <span className="text-[#4640DE]">120+ Corporates</span>
          </h3>
          <p className=" text-[12px] md:text-[16px] text-[#666666] mt-[16px]">
            Including 25 fortune 500 companies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
