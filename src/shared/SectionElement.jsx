import React from "react";
import styled from "styled-components";
const SectionStyles = styled.aside`
  padding: 1rem 0;
`;
const SectionElement = ({ value }) => {
  return <SectionStyles>{value}</SectionStyles>;
};

export default SectionElement;
