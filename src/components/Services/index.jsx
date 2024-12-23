import React from "react";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Contact from "./Contact";

const Services = ({ data }) => {
  return (
    <div>
      <Hero
        title={data.title}
        description={data.description}
        imgUrl={data.imgUrl}
      />
      <Benefits data={data} />
      <Contact />
    </div>
  );
};

export default Services;
