"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "80%",
  bgcolor: "white",
  p: { xs: "10px", md: "70px" },
  borderRadius: "30px",
};

export default function DetailsPopup() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2 className="text-center my-[10px] md:my-[32px]">
            GST Registration
          </h2>
          <div className="text-[10px] md:text-[20px]">
            <p className="font-bold">
              GST registration is compulsory for any business that is supplying
              goods or services in India. Team FMR assures you seamless GST
              registration. A few key considerations while evaluating GST
              registration applicability are -
            </p>
            <p className="mt-[20px]">
              1) Mandatory Registration - If the turnover of your business
              surpasses prescribed thresholds, then GST registration is
              compulsory. <br />
              2) Regular Taxpayers - In most states, it's mandatory if your
              turnover exceeds Rs. 40 lakhs annually. However, in special
              category states like Arunachal Pradesh, Manipur, Mizoram, etc.,
              it's mandatory if turnover exceeds Rs. 10 lakhs.
              <br /> 3) Composition Scheme For businesses having turnover either
              less than Rs.1.5 crores or less than Rs. 75 lakhs for certain
              special category states, you have the option to choose this
              scheme.
              <br /> 4) Specific Categories – In some specific categories of
              businesses, irrespective of your turnover, you need to have GST
              registration. A few such business categories are Input Service
              Distributors, E-commerce Operators, TDS Deductors, and
              Non-Resident Taxable Persons.
              <br /> 5) Mandatory GST registration for Certain Business Entities
              involved in inter-state transactions, casual taxable persons,
              reverse charge mechanism payers, and agents of suppliers.
              <br />
              6) Timeline for Registration is within 30 days once your turnover
              crosses the threshold.
            </p>
          </div>
          <p className="md:mt-[25px] mt-[10px] md:text-[18px] text-[10px]">
            Experience hassle-free GST registration with our expert guidance.
          </p>
        </Box>
      </Modal>
    </div>
  );
}
