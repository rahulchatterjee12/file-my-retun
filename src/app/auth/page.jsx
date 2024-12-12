"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import Image from "next/image";
// import Header from "@/components/Common/Header";
import LoginRegister from "@/components/auth/LoginRegister";
// import Footer from "@/components/Common/Footer";

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
    <div className="bg-white bg-right-blue">
      <Header />
      <div className="max-w-[1140px] 2xl:max-w-[1320px] px-3 lg:px-10 xl:px-0 mx-auto my-[100px]">
        <div className="md:flex justify-between items-center">
          <div className='md:w-[35%] lg:w-[25%] w-full" data-aos="fa de-right" data-aos-delay="800'>
            <h1 className="text-black text-[30px] font-semibold pb-5">
              Welcome back 👋
            </h1>
            <p className="text-black text-[18px] font-normal">
              Kindly fill in your details to get started
            </p>
            <LoginRegister id={null} />
          </div>
          <div
            className="w-full md:w-[40%] lg:w-[62%] mt-6"
            data-aos="fade-left"
            data-aos-delay="900"
          >
            <Image
              src="/assets/images/png/loginRegister.png"
              alt="logo"
              width={835}
              height={557}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
