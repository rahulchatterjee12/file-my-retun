import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Forget from "./Forget";
import Otp from "./Otp";
import Password from "./Password";
import {
  forgetPassword,
  forgetPasswordStepUpdate,
  getCompanyDetailData,
} from "@/redux/actions/auth/authActions";

const textData = {
  step1: {
    mainHeading: "Forgot password",
    subHeading:
      "Don’t worry enter your email address below we will help you reset it.",
  },
  step2: {
    mainHeading: "Verify your email",
    subHeading:
      "We’ve sent 4 digit otp code to your email address. Please enter code to complete the email verification process",
  },
  step3: {
    mainHeading: "Create new password",
    subHeading:
      "Please create a new password for your account. Your password must be different from previous one.",
  },
};

const ForgetPassword = ({ id }) => {
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState({
    email: "",
    otp: undefined,
    password: null,
    confirmPassword: null,
  });
  const { login, error, account_id, forgetStep, companyDetails } = useSelector(
    (state) => state.auth
  );
  console.log("forgetStep", login, forgetStep, error, account_id);
  const [step, setStep] = useState(1);
  const handleForgetPassword = async () => {
    dispatch(forgetPassword(1, localData.email, "", "", ""));
    setStep(2);
  };

  const handleVerifyOTP = async () => {
    console.log(2, "", account_id, parseInt(localData.otp), "");
    try {
      dispatch(forgetPassword(2, "", account_id, parseInt(localData.otp), ""));
      setStep(3);
    } catch (error) {
      alert(error);
    }
  };

  const handleResetPassword = async () => {
    try {
      if (localData.password === localData.newPassword) {
        dispatch(
          forgetPassword(
            3,
            "",
            account_id,
            parseInt(localData.otp),
            localData.password
          ),
          id
        );

        //dispatch(forgetPasswordStepUpdate(1));
      } else {
        //toast alert new password and confirm password won't match
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getCompanyDetailData(id));
    }
  }, [dispatch, id]);

  return (
    <div className="mt-[35px]">
      <div className="md:flex mx-[85px] my-[36px] gap-[135px] items-start mt-[105px]">
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
        <div
          className="md:w-[35%] lg:w-[25%] w-full md:mt-2"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <h1 className="text-black text-[30px] font-semibold pb-5">
            {textData[`step${step}`].mainHeading}
          </h1>
          <p className="text-black text-[18px] font-normal">
            {textData[`step${step}`].subHeading}
          </p>
          <div className="">
            {(step === 1 || step === undefined) && (
              <Forget
                onSubmit={() => handleForgetPassword()}
                setLocalData={setLocalData}
                localData={localData}
              />
            )}

            {step === 2 && (
              <Otp
                onSubmit={() => handleVerifyOTP()}
                resendOtp={() => handleForgetPassword()}
                setLocalData={setLocalData}
                localData={localData}
              />
            )}
            {step === 3 && (
              <Password
                onSubmit={() => handleResetPassword()}
                setLocalData={setLocalData}
                localData={localData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
