"use client";
import React, { useState } from "react";
import { postOtherWithoutLoginData } from "@/redux/actions/other/otherActions";
import { useDispatch } from "react-redux";
import { verifyOtherAllServiceQuery } from "@/helper/validation";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const dispatch = useDispatch();

  const [selectedTab, setSelectedTab] = useState("registration");
  const [formData, setFormData] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (event) => {
    const value =
      event.target.type === "text"
        ? event.target.value.toUpperCase()
        : event.target.value;

    // @ts-ignore
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: value,
    }));
  };

  const validateStep = (verificationFunction) => {
    const validation = verificationFunction(formData);
    console.log("validation", validation);
    const { validated, errorMessage } = validation;
    if (!validated) {
      toast.error(errorMessage);
      return false;
    } else {
      return true;
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    let submit = false;
    let successMessage = "";
    const mainType = "GST";
    if (validateStep(verifyOtherAllServiceQuery)) {
      setIsProcessing(true);
      submit = await dispatch(
        postOtherWithoutLoginData(mainType, selectedTab, formData)
      );
      successMessage = "Your Request submitted successfully!";
      if (submit) {
        setIsProcessing(false);
        setFormData({});
        event.target.reset();
        await Swal.fire({
          icon: "success",
          title: "Success",
          text: successMessage,
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div
      className="md:w-[700px] mx-[15px] md:mx-auto md:pt-10 pb-20"
      id="contact-form"
    >
      <h2 className="text-[#4640DE] font-bold text-[20px] md:text-[40px] text-center">
        Got Questions?
      </h2>
      <p className="text-[#000000] font-normal text-[16px] md:text-[32px] text-center mt-[12px]">
        Team FMR is ready to fulfill all your GST needs
      </p>
      <form onSubmit={submitForm} className="text-[10px] md:text-[16px]">
        <p className="text-[16px] mx-2 md:mt-[46px] -mb-5">
          Our team will contact you shortly
        </p>
        <div className="flex justify-between gap-2 pt-8">
          <input
            className="text-black border rounded border-[#A4B0C0] py-3 h-[30px] md:h-[64px] px-2 w-[174px] md:w-[345px]"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            className="text-black border rounded border-[#A4B0C0] py-3 px-2 h-[30px] md:h-[64px] w-[174px] md:w-[345px]"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        <input
          className="text-black border rounded border-[#A4B0C0] h-[30px] md:h-[64px] py-3 px-2 w-full my-4"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="text-black border rounded border-[#A4B0C0] py-3 h-[30px] md:h-[64px] px-2 w-full mb-4"
          type="text"
          name="mobile"
          placeholder="Mobile"
          onChange={handleChange}
        />
        <textarea
          className="text-black border rounded border-[#A4B0C0] py-3 px-2 w-full h-[70px] md:h-[107px]"
          type="text"
          name="query"
          placeholder="Please type your message here"
          onChange={handleChange}
        />
        <div className="text-center">
          <button
            type="submit"
            disabled={isProcessing}
            className="mt-8 w-[144px] text-white bg-[#4640DE] text-center font-sans py-[14px] px-[21px] rounded-[11px] focus:outline-none"
          >
            {isProcessing ? "Processing..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
