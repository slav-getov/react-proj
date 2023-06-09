import React from "react";
import styled from "styled-components";

const DivStyles = styled.div`
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 2rem;
`;
const InformationBox = ({ valueToDisplay }) => {
  return (
    <DivStyles>
      <p>`Person entered was ${valueToDisplay.fullName}`</p>
    </DivStyles>
  );
};

export default InformationBox;
