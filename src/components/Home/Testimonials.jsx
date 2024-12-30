"use client";
import { Avatar } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="md:flex hidden justify-center mt-[] md:gap-[100px] md:flex-row flex-col items-center">
        <div>
          <h2 className="md:text-[40px] text-[#666666] text-center font-bold text-[20px]">
            Testimonials
          </h2>
          <p className="text-[#666666] text-[10px] text-center md:text-start md:text-[18px]">
            What our client’s have to say
            <br />
            about FMR
          </p>
        </div>
        <div className="flex flex-col gap-[20px] px-[5px] my-10 md:flex-row justify-center items-start">
          <div className="w-[362px] h-[221.72px] md:w-[400px] shadow-[0px_4px_22px_rgba(0,0,0,0.25)] rounded-[16.37px] px-[20px] py-[8px]">
            <p className="border-l-[3px] text-[12px] md:text-[14.9px] mt-[26px] border-l-[#4640DE] pl-[20px]">
              As a software engineer, I was always concerned with complicated
              process of return filing. FileMyReturn has relieved me of the
              anxiety by providing end to end seamless service
            </p>
            <div className="flex justify-start gap-7 mt-[32px] items-center pb-[9px]">
              <div>
                <Avatar
                  sx={{
                    bgcolor: "white",
                    boxShadow: 2,
                    color: "#4640DE",
                    fontWeight: "700",
                  }}
                >
                  JB
                </Avatar>
              </div>
              <div>
                <h2 className="font-bold text-[15px]">Jasmeet Singh Bhatia</h2>
                <p className="text-[#666666] text-[12px]">
                  Sr. Software Engg. Genpact
                </p>
              </div>
            </div>
          </div>
          <div className="w-[362px] md:w-[400px] shadow-[0px_4px_22px_rgba(0,0,0,0.25)] rounded-[16.37px] px-[20px] py-[8px]">
            <p className="border-l-[3px] text-[12px] md:text-[13.5px] mt-[26px] border-l-[#4640DE] pl-[20px]">
              I've entrusted FMR with all my Taxation & Wealth Management needs
              for the past 8 years. Their depth of knowledge & personalized
              approach have left me highly impressed. I couldn't be more
              satisfied with their services.
            </p>
            <div className="flex justify-start gap-7 mt-[11px] items-center pb-[9px]">
              <div>
                <Avatar
                  sx={{
                    bgcolor: "white",
                    boxShadow: 2,
                    color: "#4640DE",
                    fontWeight: "700",
                  }}
                >
                  JB
                </Avatar>
              </div>
              <div>
                <h2 className="font-bold text-[15px]">Shiney Prasad</h2>
                <p className="text-[#666666] text-[12px]">
                  Country Head - India
                  <br />
                  Guardian Life Insurance Company of America
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden my-[40px]">
        <h2 className="font-bold text-[20px] text-[#666666] text-center">
          Testimonials
        </h2>
        <p className="text-[#666666] text-[10px] text-center">
          What our client’s have to say about FMR
        </p>
        <Slider {...settings}>
          <div className="mt-[10px] mb-[30px] mx-[10px]">
            <div className="w-[360px] h-[210.72px] shadow-[0px_4px_22px_rgba(0,0,0,0.25)] rounded-[16.37px] px-[20px] py-[8px]">
              <p className="border-l-[3px] text-[12px] md:text-[14.9px] mt-[26px] border-l-[#4640DE] pl-[20px]">
                As a software engineer, I was always concerned with complicated
                process of return filing. FileMyReturn has relieved me of the
                anxiety by providing end to end seamless service
              </p>
              <div className="flex justify-start gap-7 mt-[32px] items-center pb-[9px]">
                <div>
                  <Avatar
                    sx={{
                      bgcolor: "white",
                      boxShadow: 2,
                      color: "#4640DE",
                      fontWeight: "700",
                    }}
                  >
                    JB
                  </Avatar>
                </div>
                <div>
                  <h2 className="font-bold text-[15px]">
                    Jasmeet Singh Bhatia
                  </h2>
                  <p className="text-[#666666] text-[12px]">
                    Sr. Software Engg. Genpact
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[10px] mb-[30px] mx-[10px]">
            <div className="w-[360px] shadow-[0px_4px_22px_rgba(0,0,0,0.25)] rounded-[16.37px] px-[20px] py-[8px]">
              <p className="border-l-[3px] text-[12px] mt-[26px] border-l-[#4640DE] pl-[20px]">
                I've entrusted FMR with all my Taxation & Wealth Management
                needs for the past 8 years. Their depth of knowledge &
                personalized approach have left me highly impressed. I couldn't
                be more satisfied with their services.
              </p>
              <div className="flex justify-start gap-7 mt-[11px] items-center pb-[9px]">
                <div>
                  <Avatar
                    sx={{
                      bgcolor: "white",
                      boxShadow: 2,
                      color: "#4640DE",
                      fontWeight: "700",
                    }}
                  >
                    JB
                  </Avatar>
                </div>
                <div>
                  <h2 className="font-bold text-[15px]">Shiney Prasad</h2>
                  <p className="text-[#666666] text-[12px]">
                    Country Head - India
                    <br />
                    Guardian Life Insurance Company of America
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
