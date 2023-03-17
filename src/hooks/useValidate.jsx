import React, { useState } from "react";

export const useValidate = (validate) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [isSafeToSubmit, setIsSafeToSubmit] = useState(false);
  const handleBlur = (e) => {
    setErrors(validate(values));

    // if (Object.keys(errors).length == 0) {
    //   console.log("no errors");
    //   setIsSafeToSubmit(true);
    //   return;
    // }

    // setIsSafeToSubmit(false);
  };

  const handleChange = (e) => {
    console.log("in change" + e.target.name);
    e.persist();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    //setErrors(validate(values));
  };

  return {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSafeToSubmit,
  };
};
