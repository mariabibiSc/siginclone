// Creator Developer: Maria
// Date created:7 july 2024
// Decsription: Dummy component for Button. It will called when use and we have to pass the required props, it avoid writing code and same styling.

import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled,
  className,
  type,
}) => {
  return (
    <button
      type={type}
      className={`p-2 rounded-[2px] bg-primaryColor font-[460] w-[] h-[] font-soraVarible ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
