"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, navigation } from "swiper/modules";

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
    <div className="md:w-[401px] w-[271px] md:h-[586px] h-[396px] shadow-md rounded-[21px] border-[2px] border-[#262378]">
      <div className="border-b-[2px] border-b-[#262378] pb-[12px]">
        <h4 className="text-[#4640DE] text-[20px] md:text-[24px] font-bold text-center mt-[8px] md:mt-[15px]">
          {plan.title}
        </h4>
        <p className="text-[#757575] text-[16px] md:text-[20px] text-center mt-[8px] md:mt-[15px]">
          {plan.subTitle}
        </p>
      </div>

      <div>
        <div className="flex mt-[8px] md:mt-[15px]">
          <div className="text-end w-[55%]">
            <h3 className="text-[24px] md:text-[32px] font-bold">
              {plan.offerPrice}
            </h3>
          </div>
          <h5 className="text-[18px] md:text-[20px] text-[#6A6A6A] text-start ml-4 mt-2">
            <s> {plan.actualPrice}</s>
          </h5>
        </div>
      </div>

      <p className="text-center mt-[8px] md:mt-[15px]">
        ITR for {plan.members} Member
      </p>

      <div className="mt-[8px] md:mt-[15px] px-[15px] md:px-[33px] py-[10px]">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex gap-[24px] md:gap-[42px] mt-[8px]">
            <div className="hidden md:block">
              <svg
                width="25"
                height="25"
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
            <div className="md:hidden ">
              <svg
                width="18"
                height="18"
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
            <span className="mt-[2px] text-[12px] md:text-[14px]">
              {feature}
            </span>
          </div>
        ))}
        <button className="bg-black text-white text-[16px] px-[85px] md:px-[135px] py-[14px] md:py-[24px] rounded-[17px] mt-[8px] md:mt-[36px] text-nowrap">
          File Now
        </button>
      </div>
    </div>
  );
};

export default function Carousel() {
  return (
    <div className="slider-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.25,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        spaceBetween={200}
      >
        <SwiperButtonPev>
          <img src="assets/images/Home/previous.png" />
        </SwiperButtonPev>
        <SwiperButtonNext>
          <img src="assets/images/Home/next.png" />
        </SwiperButtonNext>
        {plans.map((plan, i) => (
          <SwiperSlide key={i}>
            <PlanCart plan={plan} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div className="absolute right-5 z-20 top-[48%] hidden md:block">
      <button onClick={() => swiper.slideNext()}>{children}</button>;
    </div>
  );
};

const SwiperButtonPev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <div className="absolute left-5 z-20 top-[48%] hidden md:block">
      <button onClick={() => swiper.slidePrev()}>{children}</button>;
    </div>
  );
};
