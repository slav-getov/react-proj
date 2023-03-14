import React from "react";
import styled from "styled-components";
const MainStyles = styled.main`
  display: flex;
  gap: 10rem;
`;
const MainSection = ({ children }) => {
  return <MainStyles>{children}</MainStyles>;
};

export default MainSection;
