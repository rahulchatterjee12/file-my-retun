"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const MobileCarousel = ({ children }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex my-7 gap-[25px]">{children}</div>
      </div>
    </div>
  );
};

export default MobileCarousel;
