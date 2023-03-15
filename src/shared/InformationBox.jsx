import React from "react";
import { DivStyles } from "./informationbox.style.css";
const InformationBox = ({ valueToDisplay }) => {
  return (
    <DivStyles>
      <p>`Person entered was ${valueToDisplay.fullName}`</p>
    </DivStyles>
  );
};

export default InformationBox;
