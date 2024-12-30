import React from "react";
import MobileCarousel from "../common/MobileCarousel";

const Benefits = () => {
  return (
    <div className="md:mt-[45px] mt-[24px]">
      <h2 className="md:text-center text-start px-4 text-[20px] md:text-[40px] font-bold">
        <span className="text-[#4640DE]">Key Benefits</span>of e-filling your
        income tax returns
      </h2>
      <div className="md:mt-[40px]">
        <div className="flex justify-center">
          <div className="md:grid grid-cols-2 gap-[40px] hidden ">
            <div
              style={{
                borderTopLeftRadius: "10px",
              }}
              className="bg-[#8783F5] w-[386px] h-[171px] px-[18px] py-[25px] shadow-[0px_4px_15px_rgba(130,130,130,0.25)]"
            >
              <h3 className="text-white md:text-[24px] font-bold">
                Claim Tax Refunds
              </h3>
              <p className="text-white mt-[18px] md:text-[18px]">
                Claim refunds on excess tax payments faster by e-Filing{" "}
              </p>
            </div>
            <div
              style={{
                borderTopRightRadius: "10px",
              }}
              className="bg-[#8783F5] w-[386px] h-[171px] px-[18px] py-[25px] shadow-[0px_4px_15px_rgba(130,130,130,0.25)]"
            >
              <h3 className="text-white md:text-[24px] font-bold">
                Getting Visa
              </h3>
              <p className="text-white mt-[18px] md:text-[18px]">
                Foreign consulates may require you to furnish your income tax
                returns for obtaining Visa
              </p>
            </div>
            <div
              style={{
                borderBottomLeftRadius: "10px",
              }}
              className="bg-[#8783F5] w-[386px] h-[171px] px-[18px] py-[25px] shadow-[0px_4px_15px_rgba(130,130,130,0.25)]"
            >
              <h3 className="text-white md:text-[24px] font-bold">
                Avoid Late Filing Fee
              </h3>
              <p className="text-white mt-[18px] md:text-[18px]">
                A delay in filing ITR makes you liable to pay a fee of up to
                INR.10,000
              </p>
            </div>
            <div
              style={{
                borderBottomRightRadius: "10px",
              }}
              className="bg-[#8783F5] w-[386px] h-[171px] px-[18px] py-[25px] shadow-[0px_4px_15px_rgba(130,130,130,0.25)]"
            >
              <h3 className="text-white md:text-[24px] font-bold">
                Getting Loan or Credit Card
              </h3>
              <p className="text-white mt-[18px] md:text-[18px]">
                By e-filing, you can avail a loan or opt for a credit card
                easily
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden px-2">
          <MobileCarousel>
            <div className="m__embla__slide shrink-0 grow-0">
              <div
                className=" bg-[#8783F5] w-[322px] h-[86px] px-[18px] py-3 md:py-[25px] shadow-[0px_4px_15px_rgba(130,130,130,0.25)]"
                style={{
                  borderRadius: "10px",
                }}
              >
                <h3 className="text-white text-[12px] md:text-[24px] font-bold">
                  Claim Tax Refunds
                </h3>
                <p className="text-white text-[10px] mt-[18px] md:text-[18px]">
                  Claim refunds on excess tax payments faster by e-Filing{" "}
                </p>
              </div>
            </div>
            <div className="m__embla__slide shrink-0 grow-0">
              <div
                className=" bg-[#8783F5] w-[322px]  h-[86px] px-[18px] py-3 md:py-[25px] shadow-[0px_4px_15px_rgba(130,130,130,0.25)]"
                style={{
                  borderRadius: "10px",
                }}
              >
                <h3 className="text-white text-[12px] md:text-[24px] font-bold">
                  Getting Visa
                </h3>
                <p className="text-white text-[10px] mt-[18px] md:text-[18px]">
                  Foreign consulates may require you to furnish your income tax
                  returns for obtaining Visa
                </p>
              </div>
            </div>
            <div className="m__embla__slide shrink-0 grow-0">
              <div
                className="bg-[#8783F5] w-[322px]  h-[86px] px-[18px] py-3 md:py-[25px] shadow-[0px_4px_15px_rgba(130,130,130,0.25)]"
                style={{
                  borderRadius: "10px",
                }}
              >
                <h3 className="text-white text-[12px] md:text-[24px] font-bold">
                  Avoid Late Filing Fee
                </h3>
                <p className="text-white text-[10px] mt-[18px] md:text-[18px]">
                  A delay in filing ITR makes you liable to pay a fee of up to
                  INR.10,000
                </p>
              </div>
            </div>
            <div className="m__embla__slide shrink-0 grow-0">
              <div
                className="bg-[#8783F5] w-[322px]  h-[86px] px-[18px] py-3 md:py-[25px] shadow-[0px_4px_15px_rgba(130,130,130,0.25)]"
                style={{
                  borderRadius: "10px",
                }}
              >
                <h3 className="text-white text-[12px] md:text-[24px] font-bold">
                  Getting Loan or Credit Card
                </h3>
                <p className="text-white text-[10px] mt-[18px] md:text-[18px]">
                  By e-filing, you can avail a loan or opt for a credit card
                  easily
                </p>
              </div>
            </div>
          </MobileCarousel>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
