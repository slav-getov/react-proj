import React from "react";
import { TableButtonStyles } from "../Tables/table.style.css";
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("clicked");
};

const FormBasic = () => {
  return (
    <form>
      <input />

      <input />

      <input />
      <input />

      <TableButtonStyles title="Submit Entry" onClick={handleSubmit} />
    </form>
  );
};

export default FormBasic;
