import { Avatar } from "@mui/material";
import React from "react";

const Testimonials = () => {
  return (
    <div className="flex justify-around md:flex-row flex-col">
      <div>
        <h2 className="md:text-[40px] text-[#666666] text-center text-[20px]">
          Testimonials
        </h2>
        <p className="text-[#666666] text-[10px] text-center md:text-start md:text-[18px]">
          What our client’s have to say
          <br />
          about FMR
        </p>
      </div>
      <div className="flex flex-col gap-[20px] md:flex-row justify-center items-center">
        <div className="w-[362px] md:w-[400px] shadow-md rounded-[8px] px-[20px] py-[8px]">
          <p className="border-l-[3px] border-l-[#4640DE] pl-[20px]">
            As a software engineer, I was always concerned with complicated
            process of return filing. FileMyReturn has relieved me of the
            anxiety by providing end to end seamless service
          </p>
          <div className="flex justify-start gap-7 mt-[16px] items-center">
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
        <div className="w-[362px] md:w-[400px] shadow-md rounded-[8px] px-[20px] py-[8px]">
          <p className="border-l-[3px] border-l-[#4640DE] pl-[20px]">
            I've entrusted FMR with all my Taxation & Wealth Management needs
            for the past 8 years. Their depth of knowledge & personalized
            approach have left me highly impressed. I couldn't be more satisfied
            with their services.
          </p>
          <div className="flex justify-start gap-7 mt-[16px] items-center">
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
      </div>
    </div>
  );
};

export default Testimonials;
