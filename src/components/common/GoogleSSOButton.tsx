// Creator Developer: Maria
// Date created:7 july 2024
// Decsription: This 'Continue with Google' button will be called in sigup and sign in both screen so we made a seaprate common component and kept it in common folder and similarly if our web app need other common componets we will keep them here also.

import React from "react";
import googleIcon from "../../assets/icons/_Google Logo Icon.svg";

const GoogleSSOButton: React.FC = () => {
  const onClickFunction = () => {
    console.log("Google sso button clicked");
  };
  return (
    <button
      className="flex items-center justify-center font-[460] space-x-2 px-4 py-2 rounded-[2px] w-full text-[#3B4752] border border-gray-[#CFD8E1] hover:bg-gray-100"
      onClick={onClickFunction}
    >
      <img src={googleIcon} alt="Google sign in" className="w-5 h-5" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleSSOButton;
