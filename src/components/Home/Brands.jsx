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
    <div className="px-6 py-8">
      <h4 className="text-[#666666] md:text-[20px] text-[12px]">
        Companies we have helped grow
      </h4>
      <div className="flex  md:mt-[24px] gap-[56px] md:overflow-hidden overflow-scroll">
        {brands.map((brand) => (
          <img
            className="h-[80] w-[160] md:h-[55] md:w-[109]"
            key={brand}
            src={brand}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
