import React from "react";
import styled from "styled-components";
const InfoStyles = styled.main`
  display: flex;
  justify-content: center;
  gap: 10rem;
`;
const InformationSection = ({ children }) => {
  return <InfoStyles>{children}</InfoStyles>;
};

export default InformationSection;
