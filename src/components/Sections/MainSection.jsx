import React from "react";
import styled from "styled-components";
const MainSectionStyles = styled.div`
  display: flex;
`;
const MainSection = ({ children }) => {
  return <MainSectionStyles>{children}</MainSectionStyles>;
};

export default MainSection;
