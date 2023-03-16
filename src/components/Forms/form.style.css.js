import styled from "styled-components";
import { ActionableButton } from "../../shared/ActionableButton";

const FormStyles = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  margin-top: 2rem;
  width: 30%;
`;
const StyledLabel = styled.label`
  font-weight: bold;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 0.5rem;
  outline: none;
`;

const StyledButton = styled(ActionableButton)`
  background-color: ${(props) => props.color};
  &:hover {
    background-color: lime;
  }
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
`;

const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`;

export { FormStyles, StyledLabel, StyledInput, StyledButton, StyledAlert };
