import styled from "styled-components";
import { ActionableButton } from "../../shared/ActionableButton";
const TableStyles = styled.table`
  table-layout: fixed;
  margin-top: 2rem;
  width: 50%;
  border-collapse: collapse;
  border: 3px solid purple;
  text-align: center;
`;
const StyledLabel = styled.label`
  font-weight: bold;
`;
const TableButtonStyles = styled(ActionableButton)`
  background-color: cornflowerblue;
  &:hover {
    background-color: darkblue;
  }
`;

const TableContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { TableStyles, StyledLabel, TableButtonStyles, TableContainerStyles };
