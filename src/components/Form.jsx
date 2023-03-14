import React from "react";
import styled from "styled-components";
import { ActionableButton } from "../shared/ActionableButton";
import { useForm } from "react-hook-form";
const FormStyles = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  margin-top: 1rem;
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
  background-color: green;
  &:hover {
    background-color: lime;
  }
`;

const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`;

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => console.log(data);

  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)}>
      <legend>Get a Farm Maintenance Quote</legend>
      <div>
        <StyledLabel htmlFor="fullName">Full Name</StyledLabel>
        <StyledInput defaultValue="test" {...register("fullName")} />

        <StyledLabel htmlFor="sea">Sea pressure</StyledLabel>
        <StyledInput
          {...register(
            "sea",
            { required: true },
            { onBlur: handleSubmit(onSubmit) }
          )}
        />
        <div>
          {errors.sea && <StyledAlert>This field is required</StyledAlert>}
        </div>

        <StyledLabel htmlFor="landSqr">Land in square meters</StyledLabel>
        <StyledInput
          {...register(
            "landSqr",
            { required: true },
            { onBlur: handleSubmit(onSubmit) }
          )}
        />

        <div>
          {errors.landSqr && <StyledAlert>This field is required</StyledAlert>}
        </div>

        <StyledButton type="submit" title="Submit" />
        <StyledButton title="Cancel" />
      </div>
    </FormStyles>
  );
};

export default Form;
