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

const Form = () => {
  const [version, setVersion] = useState(0);

  const [formState, setFormState] = useState({
    fullName: "",
    areaInSqr: "",
    phone: "",
    email: "",
  });
  const { values, errors, handleBlur, handleChange } = useValidate(validate);
  useEffect(() => {
    console.log("re-render");
  }, []);
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
            onBlur={handleBlur}
          />

          <StyledLabel htmlFor="area">Area in square meters</StyledLabel>
          <StyledInput
            placeholder="1123"
            name="areaInSqr"
            //onChange={handleChange}
          />

          <StyledLabel htmlFor="phone">Phone Number</StyledLabel>
          <StyledInput placeholder="+359911" />

          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput placeholder="you@whatevermail.com" />

          <StyledButton type="submit" title="Submit" />
          <StyledButton
            title="Cancel"
            onClick={(e) => {
              e.preventDefault();
              console.log("you clicked reset!");
            }}

            //disabled={true}
          />
        </div>
      </FormStyles>
      <div>
        {errors.fullName && <StyledAlert>{errors.fullName}</StyledAlert>}
      </div>
      {/* <div>{console.log(errors)}</div> */}
    </>
  );
};

export default Form;
