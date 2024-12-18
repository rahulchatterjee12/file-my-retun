import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

const Otp = ({ onSubmit, resendOtp, setLocalData, localData }) => {
  const error = useSelector((state) => state.auth.error);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const setOTPState = (value) => {
    const otpNumber = value.join(""); // combine otp values
    setLocalData({ ...localData, otp: otpNumber });
  };
  const handlePaste = (event) => {
    // @ts-ignore
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData("Text").trim();
    const digits = pastedData.split("").slice(0, 4); // Only take the first 4 characters

    const updatedOtp = [...otp];
    digits.forEach((digit, index) => {
      updatedOtp[index] = digit;
    });
    setOTPState(updatedOtp);
    setOtp(updatedOtp);
  };

  const handleChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    setOTPState(updatedOtp);

    if (value && index < refs.length - 1) {
      refs[index + 1].current?.focus();
    }
  };

  const handleKeyUp = (index, event) => {
    const value = event.currentTarget.value;
    if (!value && index > 0 && event.key === "Backspace") {
      refs[index - 1].current?.focus();
    }
  };

  return (
    <div className="bg-white py-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex justify-between ">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyUp={(e) => handleKeyUp(index, e)}
              onPaste={handlePaste}
              ref={refs[index]}
              className="w-[71px] h-[71px] border border-[#D2D1D1] rounded-[5px] shadow-2xl text-black flex items-center justify-center text-[30px] font-semibold text-center"
            />
          ))}
        </div>
        <button
          type="button"
          onClick={resendOtp}
          className="w-full mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-[16px] font-medium text-[#5871EB] "
        >
          Resend OTP
        </button>

        <div>
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <button
            type="submit"
            className="w-full mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-[16px] font-medium text-white bg-[#5871EB] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default Otp;
