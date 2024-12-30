"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import LoginRegister from "@/components/auth/LoginRegister";

const Login = () => {
  const { login, userData } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  // Redirect to home page if user is already logged in
  useEffect(() => {
    console.log("userData-data", userData);
    if (login) {
      if (userData?.nri === "null") {
        router.push("/auth/resident");
      } else {
        router.push("/home");
      }
    }
  }, [login, userData, router]);

  return (
    <div className="bg-white">
      <div className="">
        <div className="md:flex md:gap-[115px] justify-center md:justify-between mx-[16px] md:mx-[75px] md:my-[75px] items-start">
          <div
            className="hidden md:block"
            data-aos="fade-left"
            data-aos-delay="900"
          >
            <div className="relative rounded-[27px] overflow-hidden w-[700px] h-[700px] shadow-[0px_4px_54px_rgba(0,0,0,0.25)]">
              <img
                src="/assets/images/register.png"
                alt="Placeholder Image"
                className="object-cover w-[700px] h-[700px]"
              />
              <div className="absolute w-[90%] h-[25%] bottom-[36px] rounded-md left-1/2 transform -translate-x-1/2 bg-gray-500/20 backdrop-blur-lg text-white text-center py-3">
                <p className="text-sm font-semibold text-black"></p>
              </div>
            </div>
          </div>

          <div className="md:w-[426px] w-[349px]">
            <h1 className="text-black text-[30px] font-semibold pb-5">
              Welcome back 👋
            </h1>
            <p className="text-black text-[18px] font-normal">
              Kindly fill in your details to get started
            </p>
            <LoginRegister id={null} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
