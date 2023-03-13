import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  background: ${(props) => (props.active == true ? "palevioletred" : "black")};
  font-family: "Poppins", sans-serif;
  border: none;
  border-radius: 0;
  padding-inline: 1.75rem;
  padding-block: 0.75rem;

  color: white;
`;

export const ActionableButton = ({ title, onClick, active }) => {
  return (
    <ButtonStyles active={false} onClick={() => console.log("clicked me!")}>
      {title}
    </ButtonStyles>
  );
};
