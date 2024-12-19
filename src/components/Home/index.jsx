import React from "react";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Brands from "./Brands";
import Highlights from "./Highlights";
import Services from "./Services";
import Benefits from "./Benefits";
import Youtube from "./Youtube";
import Plans from "./Plans";

const HomePage = () => {
  return (
    <div className="mt-16">
      <Hero />
      <Brands />
      <Hero2 />
      <Highlights />
      <Services />
      <Benefits />
      <Youtube />
      <Plans />
    </div>
  );
};
export default HomePage;
