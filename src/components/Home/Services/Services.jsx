"use client";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import Slider from "react-slick";
import Avatar from "./Avatar";

const cardDetails = [
  {
    title: "Income tax filling",
    subTitle: "FMR tax experts assist in filling ITR for all types of income",
    types: [
      "Income from salary",
      "Income from House property",
      "Income from Capital gains",
      "Income from Business / profession / consultancy",
      "Income from Foreign country",
    ],
  },
  {
    title: "Investments",
    types: [
      "Avail bespoke services of FMRs Wealth Manager having over two decades of experience in diverse asset classes. We focus on building a Comprehensive Financial Plan for you with due regard to your current financial status, identify & define your future based on time horizon.",
    ],
  },
  {
    title: "NRI services",
    subTitle:
      "We have domain expertise in almost financial matters impacting NRI’S",
    types: [
      "Income tax return filling",
      "Income tax notices",
      "lower tax deduction certificate",
      "wealth and portfolio management services",
      "Remittance- 15CA, 15CB certificates",
    ],
  },
  {
    title: "Registrations",
    subTitle:
      "FMR assists you in registrations across diverse locations in India",
    types: [
      "Udyam registrations (MSME)",
      "Start up registration",
      "Import export code (IEC code)",
      "FSSAI Registration",
      "GST registration",
    ],
  },
  {
    title: "Goods & Services Tax (GST)",
    subTitle: "FMR GST experts are ready to provide comprehensive assistance ",
    types: [
      "GST registration",
      "Income from House property",
      "GST return filling",
      "GST LUT filling",
      "GST invoicing and e invoicing",
    ],
  },
  {
    title: "Incorporation",
    subTitle:
      "With FMR team on your side, you can make a confident beginning & choose best entity.",
    types: [
      "Sole proprietorship",
      "Partnership",
      "Limited Liability Partnership (LLP)",
      "Private limited company",
      "Section 8 company",
    ],
  },
];

const ServicesCard = ({ item }) => {
  return (
    <div className="relative w-[320px] md:w-[381px] md:h-[300px] h-[340px] rounded-[6px] shadow-[4px_0px_20px_rgba(0,0,0,0.1)] px-[22px] py-[17px] font-bold">
      <img
        src="assets/images/Home/arrow.png"
        alt=""
        className="w-[45px] hidden md:block md:w-[69px] h-[45px] md:h-[69px] absolute -top-[23px] -right-[23px]"
      />
      <h3 className="text-[#4640DE] text-[16px] md:text-[20px]">
        {item.title}
      </h3>
      <h5 className="text-[12px] md:text-[14px] mt-[10px]">
        {item.subTitle && item.subTitle}
      </h5>
      <div className="mt-[4px]">
        {item.types.map((type, i) => (
          <div
            key={i}
            className={`flex items-${
              item.title === "Investments" ? "start" : "center"
            } align-middle mt-[10px] md:mt-[4px]`}
          >
            <CheckCircleOutlineIcon
              fontSize="21px"
              sx={{
                fontWeight: "lighter",
              }}
            />
            <p className={`md:text-[14px]  font-extralight ml-[15px]`}>
              {type}
            </p>
          </div>
        ))}
      </div>
      <div className=" bottom-[10px] absolute">
        <div className="md:justify-start flex gap-[75px]">
          <Avatar />
          <button className="md:hidden text-[12px] bg-[#4640DE] py-[5px] px-[10px] text-nowrap text-white rounded-[20px]">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2 className="text-center text-[20px] md:text-[40px] font-bold mt-[24px] md:mt-[36px]">
        What services does{" "}
        <span className="text-[#4640DE]">File my return offer</span>
      </h2>
      <div className="md:flex justify-center hidden">
        <div className="grid grid-cols-3 gap-[47px] mt-[45px]">
          {cardDetails.map((card, i) => (
            <ServicesCard item={card} key={i} />
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <Slider {...settings}>
          {cardDetails.map((card, i) => (
            <div key={i} className="my-3 ml-7">
              <ServicesCard item={card} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center mt-[54px]">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent md:w-[1134px] w-[293px]" />
      </div>
    </div>
  );
};

export default Services;
