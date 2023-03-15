import React, { useEffect, useState } from "react";
import {
  FormStyles,
  StyledAlert,
  StyledButton,
  StyledLabel,
  StyledInput,
} from "./form.style.css";

const Form = () => {
  const [version, setVersion] = useState(0);
  const [formState, setFormState] = useState({
    fullName: "",
    areaInSqr: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    console.log("re-render");
  }, []);
  const handleReset = () => {
    setVersion((v) => v + 1);
  };
  const handleChange = (e) => {
    console.log(formState);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <>
      <FormStyles
        key={version}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formState);

          handleReset();

          console.log("hey you submitted!");
        }}
      >
        <legend>Get a Farm Maintenance Quote</legend>
        <div>
          <StyledLabel htmlFor="fullName">Full Name</StyledLabel>
          <StyledInput
            placeholder="Mike Stephens"
            name="fullName"
            onChange={handleChange}
          />

          <StyledLabel htmlFor="area">Area in square meters</StyledLabel>
          <StyledInput
            placeholder="1123"
            name="areaInSqr"
            onChange={handleChange}
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
    </>
  );
};

export default Form;
