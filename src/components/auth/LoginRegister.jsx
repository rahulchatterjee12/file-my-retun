import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  errorResetInAuth,
  loginUser,
  registerUser,
} from "@/redux/actions/auth/authActions";
import { useRouter } from "next/navigation";
import { validateMobileNumber, validateEmail } from "@/helper/validation";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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
      // @ts-ignore
      const resp = await dispatch(
        loginUser(id, formData.email, formData.password)
      );
      if (resp) {
        // router.push('/home');
        console.log("resp", resp);
        // @ts-ignore
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
      // @ts-ignore
      const resp = await dispatch(registerUser(submitReg));
      if (resp) {
        // @ts-ignore
        toast.error(resp);
      }
      setTimeout(() => {
        setIsProcessing(false);
      }, 3000); // 3 seconds
    }
  };

  const handleSignInClick = () => {
    // @ts-ignore
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
    // @ts-ignore
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
      <div className="md:mb-[2px] mb-[60px]">
        <div className="flex pb-[36px] pt-[11px] justify-start ">
          <button
            onClick={handleSignInClick}
            className={`font-medium w-[146px] text-[16px] py-[11px] rounded-l-[8px] ${
              isSignInActive
                ? "bg-[#5871EB] text-white "
                : "text-[#A0A8B5] border-2 border-[#DDE1EB] "
            } `}
          >
            Sign in
          </button>
          <button
            onClick={handleRegisterClick}
            className={`font-medium w-[146px] text-[16px] py-[11px] rounded-r-[8px] ${
              !isSignInActive
                ? "bg-[#5871EB] text-white "
                : "text-[#A0A8B5] border-2 border-[#DDE1EB] "
            } `}
          >
            Register
          </button>
        </div>
        <div className="bg-white">
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
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className="text-sm">
                    <Link
                      href={forgetUrl}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </Link>
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
                    Name*
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your name "
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-black shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
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
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-[16px] font-medium text-[#696F79]"
                  >
                    Mobile*
                  </label>
                  <div className="mt-1">
                    <input
                      id="mobile"
                      name="mobile"
                      type="text"
                      maxLength={10}
                      autoComplete="tel"
                      placeholder="Enter your mobile number "
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md text-black shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center pb-2">
                    <input
                      id="termConditions"
                      name="termConditions"
                      type="checkbox"
                      checked={formData.termConditions}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="termConditions"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      I agree to terms & conditions
                    </label>
                  </div>
                </div>
              </>
            )}

            <div>
              {localError && (
                <div className="text-red-500 mb-2">{localError}</div>
              )}

              {isSignInActive ? (
                <button
                  type="submit"
                  disabled={isProcessingS}
                  className="w-full mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-[16px] font-medium text-white bg-[#5871EB] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isProcessingS ? "Signing..." : "Sign In"}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-[16px] font-medium text-white bg-[#4640DE] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isProcessing ? "Registering..." : "Sign Up"}
                </button>
              )}
            </div>

            <button
              onClick={findAccount}
              className="w-full mt-7 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Find Account with PAN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
