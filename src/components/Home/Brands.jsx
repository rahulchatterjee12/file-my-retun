import React from "react";

const brands = [
  "assets/images/Home/brands/1.png",
  "assets/images/Home/brands/2.png",
  "assets/images/Home/brands/3.png",
  "assets/images/Home/brands/4.png",
  "assets/images/Home/brands/5.png",
  "assets/images/Home/brands/6.png",
];

const Brands = () => {
  return (
    <div className="px-[19px] md:px-[64px] py-8 shadow-[0px_4px_21px_rgba(0,0,0,0.1)]">
      <h4 className="text-[#666666] md:text-[20px] text-[12px]">
        Companies we have helped grow
      </h4>
      <div className="flex overflow-hidden group gap-[56px] mt-[14px]">
        <div className="animate-loop-scroll-phone md:animate-loop-scroll flex group-hover:paused md:gap-[56px]">
          {brands.map((brand) => (
            <img
              className="md:h-[80] md:w-[160] h-[55] w-[109]"
              key={brand}
              src={brand}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
