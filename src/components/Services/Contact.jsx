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
    <div className="w-[670px] mx-auto pt-10 pb-20">
      <h2 className="text-[#293854] font-bold text-[30px] text-center">
        Contact Us
      </h2>
      <p className="text-[#73839C] font-normal text-[14px] text-center">
        Please leave your message and we will contact you shortly
      </p>
      <form onSubmit={submitForm}>
        <div className="flex justify-between pt-8">
          <input
            className="text-black border rounded border-[#A4B0C0] py-3 px-2 w-[322px]"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            className="text-black border rounded border-[#A4B0C0] py-3 px-2 w-[322px]"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>
        <input
          className="text-black border rounded border-[#A4B0C0] py-3 px-2 w-full my-4"
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="text-black border rounded border-[#A4B0C0] py-3 px-2 w-full mb-4"
          type="text"
          name="mobile"
          placeholder="Mobile"
          onChange={handleChange}
        />
        <input
          className="text-black border rounded border-[#A4B0C0] py-3 px-2 w-full h-[107px]"
          type="text"
          name="query"
          placeholder="Please type your message here"
          onChange={handleChange}
        />
        <div className="text-center">
          <button
            type="submit"
            disabled={isProcessing}
            className="mt-8 w-[144px] text-white bg-[#4640DE] text-center font-sans py-[14px] px-[21px] rounded-[4px] focus:outline-none"
          >
            {isProcessing ? "Processing..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
