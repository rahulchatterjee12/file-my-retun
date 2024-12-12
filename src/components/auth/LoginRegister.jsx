"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  errorResetInAuth,
  loginUser,
  registerUser,
} from "@/redux/actions/auth/authActions";
import { useRouter } from "next/router";
import { validateMobileNumber, validateEmail } from "@/helper/validation";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const LoginRegister = ({ id }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const error = useSelector((state) => state.auth.error);

  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
    termConditions: false,
  });

  const [isSignInActive, setIsSignInActive] = useState(true); // State to track if Sign in is active
  const [isProcessingS, setIsProcessingS] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    if (!formData.termConditions && !isSignInActive) {
      toast.error("You must agree to the terms and conditions");
      // setLocalError('You must agree to the terms and conditions');
      return;
    }

    if (isSignInActive) {
      if (!validateEmail(formData.email)) {
        toast.error("Email id is invalid");
        // setLocalError('Email id is invalid');
        return;
      }
      setIsProcessingS(true);
      const resp = await dispatch(
        loginUser(id, formData.email, formData.password)
      );
      if (resp) {
        // router.push('/home');
        console.log("resp", resp);
        toast.error(resp);
      }
      setTimeout(() => {
        setIsProcessingS(false);
      }, 2000); // 2 seconds
    } else {
      if (!validateEmail(formData.email)) {
        toast.error("Email id is invalid");
        // setLocalError('Email id is invalid');
        return;
      }

      if (!validateMobileNumber(formData.mobile)) {
        toast.error("Mobile number is invalid");
        // setLocalError('Mobile number is invalid');
        return;
      }

      setIsProcessing(true);
      setLocalError("");
      const submitReg = {
        companyId: id,
        email: formData.email,
        name: formData.name,
        mobile: formData.mobile,
        password: formData.password,
      };
      const resp = await dispatch(registerUser(submitReg));
      if (resp) {
        toast.error(resp);
      }
      setTimeout(() => {
        setIsProcessing(false);
      }, 3000); // 3 seconds
    }
  };

  const handleSignInClick = () => {
    dispatch(errorResetInAuth());
    setFormData({
      email: "",
      password: "",
      name: "",
      mobile: "",
      termConditions: false,
    });
    setIsSignInActive(true);
  };

  const handleRegisterClick = () => {
    dispatch(errorResetInAuth());
    setFormData({
      email: "",
      password: "",
      name: "",
      mobile: "",
      termConditions: false,
    });
    setIsSignInActive(false);
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? e.target.checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const findAccount = () => {
    const recoverUrl = id
      ? `/auth/recover-account/${id}/`
      : "/auth/recover-account";
    router.push(recoverUrl);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const forgetUrl = id
    ? `/auth/forget-password/${id}/`
    : "/auth/forget-password";

  return (
    <>
      <ToastContainer />
      <div className="flex py-3">
        <div
          className={`border-solid border-1 border-light-blue-500 border ${
            isSignInActive ? "bg-[#5871EB]" : ""
          }`}
        >
          <button
            onClick={handleSignInClick}
            className={`font-medium w-[146px] text-[16px] py-[11px] ${
              isSignInActive ? "text-white" : "text-[#A0A8B5]"
            } hover:text-white hover:bg-[#5871EB] rounded-l-[8px]`}
          >
            Sign in
          </button>
        </div>
        <div
          className={`border-solid border-1 border-light-blue-500 border ${
            !isSignInActive ? "bg-[#5871EB]" : ""
          }`}
        >
          <button
            onClick={handleRegisterClick}
            className={`font-medium w-[146px] text-[16px] py-[11px] ${
              !isSignInActive ? "text-white" : "text-[#A0A8B5]"
            } hover:text-white hover:bg-[#5871EB]`}
          >
            Register
          </button>
        </div>
      </div>

      <div className="">
        <div className="bg-white py-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {isSignInActive ? (
              <>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[16px] font-medium text-[#696F79]"
                  >
                    Email address*
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your email "
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-black shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-[16px] font-medium text-[#696F79]"
                  >
                    Password*
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 focus:outline-none"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5871EB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 12c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zM24 11.551s-4.252 7.449-11.985 7.449c-7.18 0-12.015-7.449-12.015-7.449s4.446-6.551 12.015-6.551c7.694 0 11.985 6.551 11.985 6.551zm-8 .449c0-2.208-1.791-4-4-4-2.208 0-4 1.792-4 4 0 2.209 1.792 4 4 4 2.209 0 4-1.791 4-4z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#5871EB"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 12c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zM24 11.551s-4.252 7.449-11.985 7.449c-7.18 0-12.015-7.449-12.015-7.449s4.446-6.551 12.015-6.551c7.694 0 11.985 6.551 11.985 6.551zm-8 .449c0-2.208-1.791-4-4-4-2.208 0-4 1.792-4 4 0 2.209 1.792 4 4 4 2.209 0 4-1.791 4-4z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[16px] font-medium text-[#696F79]"
                  >
                    Full Name*
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name "
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-black shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-[16px] font-medium text-[#696F79]"
                  >
                    Mobile Number*
                  </label>
                  <div className="mt-1">
                    <input
                      id="mobile"
                      name="mobile"
                      type="text"
                      placeholder="Enter your mobile number "
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-black shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className={`w-full ${
                  isSignInActive ? "bg-[#5871EB]" : "bg-[#696F79]"
                } text-white py-2.5 px-6 rounded-[6px]`}
                disabled={isProcessingS || isProcessing}
              >
                {isProcessingS || isProcessing
                  ? "Processing..."
                  : isSignInActive
                  ? "Sign In"
                  : "Register"}
              </button>
            </div>
          </form>

          <div className="mt-5 text-center">
            {isSignInActive ? (
              <>
                <span className="text-[16px] font-medium text-[#696F79]">
                  New to the platform?{" "}
                  <Link
                    href="#"
                    className="text-[#5871EB]"
                    onClick={handleRegisterClick}
                  >
                    Register
                  </Link>
                </span>
                <p className="text-[16px] text-[#5871EB] mt-2">
                  <Link href={forgetUrl}>Forgot password?</Link>
                </p>
              </>
            ) : (
              <>
                <span className="text-[16px] font-medium text-[#696F79]">
                  Already a user?{" "}
                  <Link
                    href="#"
                    className="text-[#5871EB]"
                    onClick={handleSignInClick}
                  >
                    Sign in
                  </Link>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
