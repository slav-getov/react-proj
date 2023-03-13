import React from "react";
import styled from "styled-components";
const HeaderStyles = styled.header`
  margin: inherit;
  padding: inherit;
  background-color: blue;
  color: white;
`;

const Header = ({ titleOfHeader }) => {
  return (
    <HeaderStyles>
      <p>hey</p>
    </HeaderStyles>
  );
};

export default Header;
