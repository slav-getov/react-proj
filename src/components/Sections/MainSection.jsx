import React from "react";
import { MainSectionStyles } from "./mainsection.style.css";
MainSectionStyles;
const MainSection = ({ children }) => {
  return <MainSectionStyles>{children}</MainSectionStyles>;
};

export default MainSection;
