import React from "react";
import styled from "styled-components";
const HoverStyles = styled.span`
  &:hover {
    font-style: italic;
  }
`;
const TextBoxWithHover = ({ value }) => {
  return <HoverStyles>{value}</HoverStyles>;
};

export default TextBoxWithHover;
