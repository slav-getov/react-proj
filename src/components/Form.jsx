import React from "react";
import styled from "styled-components";
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

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
  opacity: ${(props) => (!props.enabled ? 0.5 : 1)};
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
        <StyledLabel for="fullName">Full Name</StyledLabel>
        <StyledInput defaultValue="test" {...register("full-name")} />

        {/* include validation with required or other standard HTML validation rules */}
        <StyledLabel for="areaCode">Area Code</StyledLabel>
        <StyledInput
          {...register(
            "areaCode",
            { required: true },
            { onBlur: handleSubmit(onSubmit) }
          )}
        />

        <StyledButton type="submit">Submit</StyledButton>
      </div>

      <div>
        {errors.areaCode && <StyledAlert>This field is required</StyledAlert>}
      </div>
    </FormStyles>
  );
};

export default Form;
