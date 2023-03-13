import React from "react";
import styled from "styled-components";
const SectionStyles = styled.aside`
  padding: 1rem 0;
  font-size: 2rem;
`;
const SectionElement = ({ value }) => {
  return <SectionStyles>{value}</SectionStyles>;
};

export default SectionElement;
