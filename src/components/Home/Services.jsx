import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MobileCarousel from "../common/MobileCarousel";

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
    <div className="m__embla__slide shrink-0 grow-0 relative w-[320px] md:w-[381px] h-[300px] rounded-[6px] shadow-md px-[22px] py-[17px] font-bold">
      <img
        src="assets/images/Home/arrow.png"
        alt=""
        className="w-[47px] md:w-[69px] h-[47px] md:h-[69px] absolute -top-[17px] -right-[17px]"
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
            className="flex items-start align-middle mt-[8px] md:mt-[4px]"
          >
            <CheckCircleOutlineIcon
              sx={{
                fontWeight: 500,
              }}
            />
            <p
              className={`md:text-[${
                item.title === "Investments" ? "14px" : "12px"
              }] text-[10px] font-extralight ml-[15px]`}
            >
              {type}
            </p>
          </div>
        ))}
      </div>
      <img
        src="assets/images/Home/avatars.png"
        alt=""
        className="bottom-[17px] absolute"
      />
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <h2 className="text-center text-[20px] md:text-[40px] font-bold mt-[24px] md:mt-[70px]">
        What services does{" "}
        <span className="text-[#4640DE]">File my return offer ?</span>
      </h2>
      <div className="md:flex justify-center hidden">
        <div className="grid grid-cols-3 gap-[30px] mt-[45px]">
          {cardDetails.map((card, i) => (
            <ServicesCard item={card} key={i} />
          ))}
        </div>
      </div>

      <div className="md:hidden flex ml-5">
        <MobileCarousel>
          {cardDetails.map((card, i) => (
            <ServicesCard item={card} key={i} />
          ))}
        </MobileCarousel>
      </div>
      <div className="flex justify-center">
        <img
          src="assets/images/Home/line.png"
          alt=""
          className="items-center w-[293px] md:w-[1134px] mt-[24px] md:mt-[70px]"
        />
      </div>
    </div>
  );
};

export default Services;
