import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ActionableButton } from "../shared/ActionableButton";
import { useForm } from "react-hook-form";
const FormStyles = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  margin-top: 1rem;
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
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      fullName: "",
      areaSqr: "",
      phone: "",
      email: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <FormStyles onSubmit={handleSubmit(onSubmit)}>
        <legend>Get a Farm Maintenance Quote</legend>
        <div>
          <StyledLabel htmlFor="fullName">Full Name</StyledLabel>
          <StyledInput
            placeholder="Mike Stephens"
            {...register("fullName", {
              required: {
                value: true,
                message: "Please make sure form is filled",
              },
              pattern: {
                value: /^([^0-9]*)$/,
                message: "Please enter only word chars or special symbols",
              },
            })}
          />

          <StyledLabel htmlFor="area">Area in square meters</StyledLabel>
          <StyledInput
            placeholder="1123"
            {...register("areaSqr", {
              required: {
                value: true,
                message: "Please make sure form is filled",
              },
              pattern: {
                value: /^([1-9]*)$/,
                message: "Please enter only nums between 1-9",
              },
            })}
          />

          <StyledLabel htmlFor="phone">Phone Number</StyledLabel>
          <StyledInput
            placeholder="+35988777"
            {...register("phone", {
              required: {
                value: true,
                message: "Please make sure form is filled",
              },
              pattern: {
                value: /^([0-9|\+]*)$/,
                message:
                  "Please enter a valid phone number. No spaces or dashes.",
              },
            })}
          />

          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            placeholder="you@whatevermail.com"
            {...register("email", {
              required: {
                value: true,
                message: "Please make sure form is filled",
              },
            })}
          />

          <StyledButton type="submit" title="Submit" />
          <StyledButton title="Cancel" onClick={() => reset()} />

          <div>
            {(errors.fullName?.message && (
              <StyledAlert>{errors.fullName?.message}</StyledAlert>
            )) ||
              (errors.areaSqr?.message && (
                <StyledAlert>{errors.areaSqr?.message}</StyledAlert>
              )) ||
              (errors.phone?.message && (
                <StyledAlert>{errors.phone?.message}</StyledAlert>
              )) ||
              (errors.email?.message && (
                <StyledAlert>{errors.email?.message}</StyledAlert>
              ))}
          </div>
        </div>
      </FormStyles>
    </>
  );
};

export default Form;
