import React from "react";
import FiveBenefits from "./FiveBenefits";
import SixBenefits from "./SixBenefits";
import EightBenefits from "./EightBenefits";

const Benefits = ({ data }) => {
  if (data.features.length === 5) return <FiveBenefits data={data} />;
  else if (data.features.length === 6) return <SixBenefits data={data} />;
  else if (data.features.length === 8) return <EightBenefits data={data} />;
  else return <div></div>;
};

export default Benefits;
