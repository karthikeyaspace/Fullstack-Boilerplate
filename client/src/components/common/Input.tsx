import React from "react";
import { InputProps } from "../../types/commonComponentTypes";

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className=""
    />
  );
};

export default Input;