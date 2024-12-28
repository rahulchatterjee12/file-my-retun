import React from "react";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Contact from "./Contact";
import DetailsPopup from "./DetailsPopup";

const Services = ({ data }) => {
  return (
    <div className="mt-[105px]">
      <Hero
        title={data.title}
        description={data.description}
        imgUrl={data.imgUrl}
      />
      <div className="mt-[30px] md:mt-[109px]">
        <Benefits data={data} />
      </div>
      <Contact />
    </div>
  );
};

export default Services;
