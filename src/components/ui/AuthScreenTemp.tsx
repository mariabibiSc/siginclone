// Creator Developer: Maria
// Date created:7 july 2024
// Decsription: All auth screen has same format so this is dummy component for all

import React from "react";
import logo from "../../assets/images/Logos/_Tinted Icon.svg";

interface AuthScreenTempProps {
  mainHeading: string;
  subHeading: string;
  children: React.ReactNode;
  illustration: string;
}

const AuthScreenTemp: React.FC<AuthScreenTempProps> = ({
  mainHeading,
  subHeading,
  children,
  illustration,
}) => {
  return (
    <div className="lg:flex w-full items-center justify-center">
      {/* ---------------Left Column------------------ */}
      <div className="bg-white pt-8 px-10">
        <img src={logo} alt="logo" />
        <h1 className="text-[#222B33] font-soraVarible leading-[60px] max-w-[421px] font-[600] text-[64px] mt-12 mb-3">
          {mainHeading}
        </h1>
        <p className="text-[#3B4752] text-[18px] font-[300] mb-5 max-w-[421px]">
          {subHeading}
        </p>
        {children}
      </div>

      {/* ---------------right Column------------------ */}
      <div className="mt-6 lg:mt-0 flex justify-center ">
        <img
          src={illustration}
          alt="Login Illustration"
          className="lg:h-screen w-full lg:w-[731px]"
        />
      </div>
    </div>
  );
};

export default AuthScreenTemp;
