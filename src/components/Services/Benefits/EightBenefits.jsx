"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, navigation } from "swiper/modules";
import DetailsPopup from "../DetailsPopup";

const MobileCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    const targetDiv = document.getElementById("contact-form");
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <DetailsPopup open={open} handleClose={handleClose} />
      <div className=" bg-[#8783F5] w-[322px] flex justify-between  h-[70px] px-[18px] py-3 md:py-[25px] rounded-[16px]">
        <div className="w-[220px]">
          <h3 className="text-white text-[12px]  font-bold">{item.title}</h3>
          <p className="text-white text-[10px] mt-[8px]">{item.description}</p>
        </div>
        <div>
          <img
            src="/assets/images/Services/arrow.png"
            className="w-[32px] h-[32px]"
            alt=""
            onClick={handleOpen}
          />
        </div>
      </div>
    </>
  );
};

const DesktopCard = ({ data, index }) => {
  const borderRadiusStyles = {
    0: { borderTopLeftRadius: "20px" },
    1: { borderTopRightRadius: "20px" },
    2: { borderBottomLeftRadius: "20px" },
    3: { borderBottomRightRadius: "20px" },
  };

  const style = borderRadiusStyles[index % 4] || {};

  return (
    <div
      style={{
        background: "linear-gradient(100.11deg, #8783F5 2.91%, #00C8AE 100%)",
        width: "386px",
        height: "171px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#FFFFFF",
        position: "relative",
        boxShadow: "0px 4px 15px rgba(130, 130, 130, 0.25)",
        ...style,
      }}
    >
      <h3 style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>
        {data.title}
      </h3>
      <p style={{ fontSize: "14px", margin: 0 }}>{data.description}</p>
      <PopupOpenBtn data={data} />
    </div>
  );
};
const PopupOpenBtn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    const targetDiv = document.getElementById("contact-form");
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <DetailsPopup open={open} handleClose={handleClose} />
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          width: "32px",
          height: "32px",
          background: "#FFFFFF",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
        onClick={handleOpen}
      >
        <img
          src="/assets/images/Services/arrow.png"
          className="w-[32px] h-[32px]"
          alt=""
          onClick={handleOpen}
        />
      </div>
    </>
  );
};

const EightBenefits = ({ data }) => {
  const firstGroup = data.features.slice(0, 4);
  const secondGroup = data.features.slice(4, 8);
  return (
    <>
      <div className="md:block hidden">
        <div className="md:mx-[112px] items-center flex md:gap-[130px]">
          <h3 className="text-[18px] md:text-[36px] md:w-[25%]">
            {data.title2}
          </h3>
          <div className="grid grid-cols-2 gap-[40px]">
            {firstGroup.map((item, i) => (
              <DesktopCard data={item} index={i} key={i} />
            ))}
          </div>
        </div>
        <div className="mx-[112px] items-center flex md:gap-[130px] my-[74px]">
          <div className="grid grid-cols-2 gap-[40px]">
            {secondGroup.map((item, i) => (
              <DesktopCard data={item} index={i} key={i} />
            ))}
          </div>
          <h3 className="text-[18px] md:text-[36px] text-start md:w-[25%]">
            {data.title3}
          </h3>
        </div>
      </div>
      <div className="md:hidden mx-[10px]">
        <h2 className="text-[18px] font-semibold">{data.mobileTitle}</h2>
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
            {data.features.map((item, i) => (
              <SwiperSlide key={i}>
                <MobileCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default EightBenefits;
