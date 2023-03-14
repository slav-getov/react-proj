import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  disabled: ${(props) => (props.isDisabled ? true : false)};
`;

export const ActionableButton = ({ title, onClick, className, isDisabled }) => {
  return (
    <ButtonStyles
      className={className}
      onClick={onClick}
      isDisabled={isDisabled}
    >
      {title}
    </ButtonStyles>
  );
};
