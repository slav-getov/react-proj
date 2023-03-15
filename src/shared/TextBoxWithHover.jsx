import React from "react";
import { HoverStyles } from "./hover.style.css";
const TextBoxWithHover = ({ value }) => {
  return <HoverStyles>{value}</HoverStyles>;
};

export default TextBoxWithHover;
