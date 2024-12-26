import Services from "@/components/Services";
import React from "react";

const Data = {
  title: (
    <>
      Our <span className="text-[#4640DE]">GST service offerings</span> and much
      more
    </>
  ),
  description:
    "Streamline your GST compliance with ease! Our intuitive platform simplifies GST registration, filing, and returns. Get accurate calculations, timely reminders, and expert support to avoid penalties. Whether you're a small business or enterprise, trust us for hassle-free GST management. Start today and stay compliant with India's GST regulations effortlessly!",
  imgUrl: "/assets/images/Services/hero.png",
  title2: (
    <>
      <span className="text-[#4640DE] text-[55px]">Benefits</span> <br /> Of
      filling your GST with us
    </>
  ),
  title3: (
    <>
      <span className="text-[#4640DE] text-[55px]">Easy</span> <br /> Input tax
      credit
    </>
  ),
  mobileTitle: <>Key Benefits of e-filling your GST returns with us</>,
  features: [
    {
      title: "GST registration",
      description:
        "If you have paid more income tax you are eligible for a tax refund",
    },
    {
      title: "GST Return filling",
      description:
        "If you have paid more income tax you are eligible for a tax refund",
    },
    {
      title: "GST Lut Filling",
      description:
        "If you have paid more income tax you are eligible for a tax refund",
    },
    {
      title: "GST invoicing",
      description:
        "If you have paid more income tax you are eligible for a tax refund",
    },
    {
      title: "GST Annual return",
      description:
        "If you have paid more income tax you are eligible for a tax refund",
    },
    {
      title: "E way bill",
      description:
        "If you have paid more income tax you are eligible for a tax refund",
    },
    // {
    //   title: "Input tax credit",
    //   description:
    //     "If you have paid more income tax you are eligible for a tax refund",
    // },
    // {
    //   title: "GST Registration cancellation",
    //   description:
    //     "If you have paid more income tax you are eligible for a tax refund",
    // },
  ],
};

const page = () => {
  return (
    <div>
      <Services data={Data} />
    </div>
  );
};

export default page;
