// Creator Developer: Maria
// Date created:7 july 2024
// Decsription: Dummy component for label.

import React from "react";
interface LabelProps {
  htmlFor: string;
  className?: string;
  text?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, text, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-[16px] text-[#222B33] leading-[32px] font-500${className}`}
    >
      {text}
    </label>
  );
};

export default Label;
