import React from "react";

const Benefits = () => {
  return (
    <div className="md:mt-[45px] mt-[24px]">
      <h2 className="text-center text-[20px] md:text-[40px] font-bold">
        <span className="text-[#4640DE]">Key Benefits</span>of e-filling your
        income tax returns
      </h2>
      <div className="flex justify-center md:mt-[40px]">
        <div className="grid grid-cols-2 gap-4">
          <div
            style={{
              borderTopLeftRadius: "10px",
            }}
            className="bg-[#8783F5] w-[386px] h-[171px] px-[18px] py-[25px]"
          >
            <h3 className="text-white md:text-[24px] font-bold">
              Claim Tax Refunds
            </h3>
            <p className="text-white md:text-[18px]">
              Claim refunds on excess tax payments faster by e-Filing{" "}
            </p>
          </div>
          <div
            style={{
              borderTopRightRadius: "10px",
            }}
            className="bg-[#8783F5] w-[386px] h-[171px] px-[18px] py-[25px]"
          >
            <h3 className="text-white md:text-[24px] font-bold">
              Getting Visa
            </h3>
            <p className="text-white md:text-[18px]">
              Foreign consulates may require you to furnish your income tax
              returns for obtaining Visa
            </p>
          </div>
          <div
            style={{
              borderBottomLeftRadius: "10px",
            }}
            className="bg-[#8783F5] w-[386px] h-[171px] px-[18px] py-[25px]"
          >
            <h3 className="text-white md:text-[24px] font-bold">
              Avoid Late Filing Fee
            </h3>
            <p className="text-white md:text-[18px]">
              A delay in filing ITR makes you liable to pay a fee of up to
              INR.10,000
            </p>
          </div>
          <div
            style={{
              borderBottomRightRadius: "10px",
            }}
            className="bg-[#8783F5] w-[386px] h-[171px] px-[18px] py-[25px]"
          >
            <h3 className="text-white md:text-[24px] font-bold">
              Getting Loan or Credit Card
            </h3>
            <p className="text-white md:text-[18px]">
              By e-filing, you can avail a loan or opt for a credit card easily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
