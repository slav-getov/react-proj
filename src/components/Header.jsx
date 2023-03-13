import React from "react";
import styled from "styled-components";
import { GiFarmer } from "react-icons/gi";
import TextBoxWithHover from "../shared/TextBoxWithHover";
const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  background-color: cornflowerblue;
  padding: 2rem 1rem;
  color: white;
  clip-path: polygon(0 0, 40% 0%, 35% 100%, 0% 100%);
`;

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
