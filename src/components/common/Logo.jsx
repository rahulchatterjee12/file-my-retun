import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src={"/assets/images/logo.png"}
        width={150}
        height={50}
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
