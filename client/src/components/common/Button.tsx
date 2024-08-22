import React from "react";
import { ButtonProps } from "../../types/commonComponentTypes";

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="">
      {label}
    </button>
  );
};

export default Button;
