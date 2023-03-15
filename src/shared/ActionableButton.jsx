import React from "react";
import { ButtonStyles } from "./actionablebutton.style.css";
export const ActionableButton = ({ title, onClick, className, disabled }) => {
  return (
    <ButtonStyles className={className} onClick={onClick} disabled={disabled}>
      {title}
    </ButtonStyles>
  );
};
