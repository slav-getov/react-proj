import React, { useEffect, useState } from "react";
import {
  FormStyles,
  StyledAlert,
  StyledButton,
  StyledLabel,
  StyledInput,
} from "./form.style.css";
import { validate } from "../../helpers/validateInput";
import { useValidate } from "../../hooks/useValidate";
import { ActionableButton } from "../../shared/ActionableButton";
const Form = () => {
  const [version, setVersion] = useState(0);
  const { values, errors, handleBlur, handleChange, isSafeToSubmit } =
    useValidate(validate);
  useEffect(() => {
    console.log("re-render");
    console.log(isSafeToSubmit);
  });

  const handleReset = () => {
    setVersion((v) => v + 1);
  };

  return (
    <>
      <FormStyles
        key={version}
        onSubmit={(e) => {
          e.preventDefault();
          //handleChange(e);
          //console.log(formState); probably we won't need form state at this point
          handleReset();
          console.log("hey you submitted!");
          console.log(values);
        }}
      >
        <legend>Get a Farm Maintenance Quote</legend>
        <div>
          <StyledLabel htmlFor="fullName">Full Name</StyledLabel>
          <StyledInput
            placeholder="Mike Stephens"
            name="fullName"
            onChange={handleChange}
            onBlur={() => {
              console.log("blurred name");
            }}
          />
          {/* {errors.fullName && <StyledAlert>{errors.fullName}</StyledAlert>} */}
          <StyledLabel htmlFor="area">Area in square meters</StyledLabel>
          <StyledInput
            placeholder="1123"
            name="areaSqr"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/* {errors.areaSqr && <div>{errors.areaSqr}</div>} */}
          <StyledLabel htmlFor="phone">Phone Number</StyledLabel>
          <StyledInput
            placeholder="+359911"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            placeholder="you@whatevermail.com"
            name="email"
            onChange={handleChange}
            onBlur={() => {
              console.log("blurred email");
            }}
          />

          <StyledButton type="submit" title="Submit" isSafe={isSafeToSubmit} />
          <ActionableButton
            title="Cancel"
            onClick={(e) => {
              e.preventDefault();
              handleReset();
              console.log("you clicked reset!");
            }}

            //disabled={true}
          />
        </div>
      </FormStyles>
      <div>
        {(errors.fullName && <StyledAlert>{errors.fullName}</StyledAlert>) ||
          (errors.areaSqr && <StyledAlert>{errors.areaSqr}</StyledAlert>) ||
          (errors.phone && <StyledAlert>{errors.phone}</StyledAlert>)}
      </div>
      {/* <div>{console.log(errors)}</div> */}
    </>
  );
};

export default Form;
