import React from "react";
import styled from "styled-components";
const MainStyles = styled.main`
  display: flex;
`;
const MainSection = ({ children }) => {
  return <MainStyles>{children}</MainStyles>;
};

export default MainSection;
