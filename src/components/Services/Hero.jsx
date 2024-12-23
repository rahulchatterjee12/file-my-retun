import React from "react";

const Hero = ({ title, description, imgUrl }) => {
  return (
    <div>
      <div className="flex justify-between ml-[108px] gap-[180px]">
        <div className="w-[501px]">
          <h2 className="text-[36px] font-semibold">{title}</h2>
          <p className="text-[18px]">{description}</p>
          <button className="px-[24px] py-[10px] rounded-[30px] shadow-md">
            Contact Us
          </button>
        </div>

        <div>
          <img className="w-[657px]" src={imgUrl} alt="File Your Tax" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
