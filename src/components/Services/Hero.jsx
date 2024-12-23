import React from "react";

const Hero = ({ title, description, imgUrl }) => {
  return (
    <div>
      <div className="flex md:justify-between mx-[20px] md:mx-[108px] md:gap-[180px]">
        <div className="w-full md:w-[501px]">
          <h2 className="text-[20px] md:text-[36px] font-semibold">{title}</h2>
          <p className="text-[12px] md:text-[18px]">{description}</p>
          <button className="px-[10px] md:px-[24px] py-[5px] md:py-[10px] mt-[40px] md:mt-[32px] rounded-[30px] shadow-md">
            Contact Us
          </button>
        </div>

        <div className="md:block hidden">
          <img className="w-[657px]" src={imgUrl} alt="File Your Tax" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
