// Creator Developer: Maria
// Date created:7 july 2024
// Decsription: Dummy component for input fields. All forms of application have alot of inputs with same styling. It'll avoid writing code and same styling for input fields in all forms.

import React from "react";

interface InputProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  value,
  onChange,
  className,
  required = false,
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={`border border-gray-[#CFD8E1] bg-[#f9fafb] px-3 py-2 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
      required={required}
    />
  );
};

export default Input;
