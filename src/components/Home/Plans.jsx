import React from "react";
import Carousel from "./PlansCarousel/Craousel";

const Plans = () => {
  return (
    <div>
      <h3 className="text-[36px] text-center md:mt-[70px] mt-[24px]">
        Have a look at our exciting plans!
      </h3>
      <Carousel options={{ loop: true }} />
    </div>
  );
};

export default Plans;
