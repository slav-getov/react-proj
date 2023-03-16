import React, { useState } from "react";

export const useValidate = (validate) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [isSafeToSubmit, setIsSafeToSubmit] = useState(false);
  const handleBlur = (e) => {
    setErrors(validate(values));
  };

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSafeToSubmit(true);
  };

  return { values, errors, handleBlur, handleChange, handleSubmit };
};
