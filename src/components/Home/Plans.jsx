import React from "react";
import Carousel from "./PlansCarousel/Craousel";

const Plans = () => {
  return (
    <div>
      <h3 className="md:text-[36px] text-[18px] mb-[10px] text-center md:mt-[70px] mt-[24px]">
        Have a look at our exciting plans!
      </h3>
      <Carousel options={{ loop: true }} />
    </div>
  );
};

export default Plans;
