"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const plans = [
  {
    title: "Express filling",
    subTitle: "Suitability",
    actualPrice: "2599/-",
    offerPrice: "1599/-",
    members: 1,
    features: [
      "Single (Form 16)",
      "Single (House property)",
      "Income from other sources",
      "Residential status (Indian)",
      "Income from other sources",
    ],
    url: "",
  },
  {
    title: "Express filling",
    subTitle: "Suitability",
    actualPrice: "2599/-",
    offerPrice: "1599/-",
    members: 1,
    features: [
      "Single (Form 16)",
      "Single (House property)",
      "Income from other sources",
      "Residential status (Indian)",
      "Income from other sources",
    ],
    url: "",
  },
  {
    title: "Express filling",
    subTitle: "Suitability",
    actualPrice: "2599/-",
    offerPrice: "1599/-",
    members: 1,
    features: [
      "Single (Form 16)",
      "Single (House property)",
      "Income from other sources",
      "Residential status (Indian)",
      "Income from other sources",
    ],
    url: "",
  },
  {
    title: "Express filling",
    subTitle: "Suitability",
    actualPrice: "2599/-",
    offerPrice: "1599/-",
    members: 1,
    features: [
      "Single (Form 16)",
      "Single (House property)",
      "Income from other sources",
      "Residential status (Indian)",
      "Income from other sources",
    ],
    url: "",
  },
  {
    title: "Express filling",
    subTitle: "Suitability",
    actualPrice: "2599/-",
    offerPrice: "1599/-",
    members: 1,
    features: [
      "Single (Form 16)",
      "Single (House property)",
      "Income from other sources",
      "Residential status (Indian)",
      "Income from other sources",
    ],
    url: "",
  },
  {
    title: "Express filling",
    subTitle: "Suitability",
    actualPrice: "2599/-",
    offerPrice: "1599/-",
    members: 1,
    features: [
      "Single (Form 16)",
      "Single (House property)",
      "Income from other sources",
      "Residential status (Indian)",
      "Income from other sources",
    ],
    url: "",
  },
];

const PlanCart = ({ plan }) => {
  return (
    <div className="embla__slide md:w-[401px] w-[271px] md:h-[586px] h-[396px] shadow-md rounded-[21px] border-[2px] border-[#262378]">
      <div className="border-b-[2px] border-b-[#262378] pb-[12px]">
        <h4 className="text-[#4640DE] text-[24px] font-bold text-center mt-[15px]">
          {plan.title}
        </h4>
        <p className="text-[#757575] text-[20px] text-center mt-[15px]">
          {plan.subTitle}
        </p>
      </div>

      <div>
        <div className="flex mt-[15px]">
          <div className="text-end w-[55%]">
            <h3 className="text-[32px] font-bold">{plan.offerPrice}</h3>
          </div>
          <h5 className="text-[20px] text-[#6A6A6A] text-start ml-4 mt-2">
            <s> {plan.actualPrice}</s>
          </h5>
        </div>
      </div>

      <p className="text-center mt-[15px]">ITR for {plan.members} Member</p>

      <div className="mt-[15px] px-[33px] py-[10px]">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex gap-[42px] mt-[8px]">
            <div>
              <svg
                width="31"
                height="32"
                viewBox="0 0 31 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.4166 14.7734V16C28.415 18.8753 27.5131 21.6729 25.8453 23.9758C24.1776 26.2787 21.8333 27.9633 19.1623 28.7786C16.4912 29.5938 13.6364 29.4959 11.0236 28.4995C8.41084 27.503 6.1801 25.6615 4.66408 23.2494C3.14805 20.8374 2.42798 17.9841 2.61125 15.1151C2.79452 12.2461 3.87131 9.51512 5.68103 7.32945C7.49075 5.14378 9.93643 3.62053 12.6533 2.98688C15.3702 2.35324 18.2128 2.64314 20.757 3.81336"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.4167 5.33337L15.5 18.68L11.625 14.68"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="mt-[2px]">{feature}</span>
          </div>
        ))}
        <button className="bg-black text-white px-[135px] py-[24px] rounded-[17px] mt-[36px] text-nowrap">
          File Now
        </button>
      </div>
    </div>
  );
};

const Carousel = () => {
  const length = plans.length;
  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const getCenterIndex = useCallback(() => {
    return Math.floor(plans.length / 2);
  }, [plans]);

  const scrollToCenter = useCallback(() => {
    if (!embla) return;

    const centerIndex = getCenterIndex();
    embla.scrollTo(centerIndex);
    setSelectedIndex(centerIndex);
  }, [embla, getCenterIndex]);

  const scrollTo = useCallback(
    (index) => {
      if (!embla) return;
      embla.scrollTo(index);
      setSelectedIndex(index);
    },
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  const handleNext = useCallback(() => {
    if (!embla || !embla.canScrollNext()) return;
    embla.scrollNext();
  }, [embla]);

  const handlePrev = useCallback(() => {
    if (!embla || !embla.canScrollPrev()) return;
    embla.scrollPrev();
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    scrollToCenter();
  }, [embla, onSelect, scrollToCenter]);

  return (
    <>
      <div className="carousel-container">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container md:gap-[20px] gap-[10px] md:px-0 px-2 ml-24">
            {/* Dummy slides for scroll room */}
            <div className="embla__slide embla__slide--dummy" />
            <div className="embla__slide embla__slide--dummy" />
            {plans.map((plan, i) => {
              const isSelected = i === selectedIndex;
              const isNext = i === selectedIndex + 1;
              const isPrev = i === selectedIndex - 1;

              let scaleClass = "md:scale-75";
              if (isSelected) {
                scaleClass = "md:scale-100 z-10";
              } else if (isNext || isPrev) {
                scaleClass = "md:scale-90";
              } else {
                scaleClass = "md:scale-75";
              }

              return (
                <div className={`embla__slide ${scaleClass}`} key={i}>
                  <PlanCart plan={plan} />
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={handlePrev}
          disabled={!embla?.canScrollPrev()}
          className="absolute left-5 md:block hidden"
        >
          <img src="assets/images/Home/previous.png" />
        </button>

        <button
          onClick={handleNext}
          disabled={!embla?.canScrollNext()}
          className="absolute right-5 md:block hidden"
        >
          <img src="assets/images/Home/next.png" />
        </button>
      </div>
      <div className="flex justify-center my-10 gap-[2px]">
        {Array.from({ length }, (_, index) => (
          <div
            key={index}
            className={`${
              index === selectedIndex
                ? "md:w-[87px] w-[39px] bg-[#4640DE]"
                : "w-[11px] bg-[#D9D9D9] border-[#A8A8A8]"
            } md:h-[11px] h-[6px] rounded-full border-[2px]  transition-all duration-300 ease-in-out`}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
