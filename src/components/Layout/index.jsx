import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mt-24 md:mt-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
