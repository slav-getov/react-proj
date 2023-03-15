import React from "react";
import { GiFarmer } from "react-icons/gi";
import TextBoxWithHover from "../../shared/TextBoxWithHover";
import { HeaderStyles } from "./header.style.css";

const Header = ({ titleOfHeader }) => {
  return (
    <HeaderStyles>
      <GiFarmer style={{ fontSize: "50px" }} />
      <p style={{ fontSize: "40px" }}>
        Farming made <TextBoxWithHover value="easy" />
      </p>
    </HeaderStyles>
  );
};

export default Header;
