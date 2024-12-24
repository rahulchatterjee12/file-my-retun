"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileInfo,
  updateNRIStatus,
} from "@/redux/actions/auth/authActions";
import { useRouter } from "next/navigation";

export default function ResidentStatus() {
  const { nriUpdate, error } = useSelector((state) => state.auth);

  const router = useRouter();
  const dispatch = useDispatch();

  const fetchMemberProfile = async (status) => {
    const res = await dispatch(updateNRIStatus(status));
    console.log("res:", res);
    if (res) {
      const dis = await dispatch(getProfileInfo());
      if (dis) {
        router.push("/home");
      }
    }
  };

  useEffect(() => {
    if (nriUpdate) {
      router.push("/home");
    }
  }, [nriUpdate]);
  return (
    <div className="max-w-[1140px] 2xl:max-w-[1320px] px-3 lg:px-10 xl:px-0 mx-auto my-[60px]">
      <div className="md:flex justify-between items-center">
        <div className='md:w-[35%] lg:w-[45%] w-full" data-aos="fade-right" data-aos-delay="800'>
          <h1 className="font-extrabold  lg:text-[55px] md:text-[30px] text-[20px] text-[#31353B]">
            Please let us know about your Residency Status
          </h1>
          <p className="font-normal  text-[24px] text-black pb-5">
            We hope you don&apos;t mind us asking, but we are curious about your
            residency status. Are you a Resident Indian or Non-Resident Indian
            (NRI)?{" "}
          </p>
          <button
            type="submit"
            onClick={() => fetchMemberProfile("false")}
            className="w-full md:w-[426px]  mb-4 flex justify-center py-2 px-4 border border-[#4640DE] rounded-[10px] shadow-sm text-[16px]  font-medium text-[#4640DE] hover:text-white hover:bg-[#4640DE] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Resident Indian
          </button>

          <button
            type="submit"
            onClick={() => fetchMemberProfile("true")}
            className=" w-full md:w-[426px]  flex justify-center py-2 px-4 border border-[#4640DE] rounded-[10px] shadow-sm text-[16px]  font-medium text-[#4640DE] hover:text-white hover:bg-[#4640DE] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Non Resident Indian
          </button>
        </div>
        <div
          className="w-full md:w-[40%] lg:w-[50%] mt-6"
          data-aos="fade-left"
          data-aos-delay="900"
        >
          <Image
            src="/assets/images/png/Resident.png"
            alt="logo"
            width={710}
            height={710}
          />
        </div>
      </div>
    </div>
  );
}
