import React from "react";
import Carousel from "./PlansCarousel/Craousel";

const Plans = () => {
  return (
    <div className="bg-[#F3F2FF] ">
      <h3 className="md:text-[36px] text-[18px] mb-[10px] text-center md:pt-[70px] pt-[24px]">
        Have a look at our exciting plans!
      </h3>
      <Carousel options={{ loop: true }} />
    </div>
  );
};

export default Plans;
