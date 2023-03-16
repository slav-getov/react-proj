import React, { useState } from "react";

export const useValidate = (validate) => {
  const [errors, setErrors] = useState();
  const [values, setValues] = useState();

  const handleBlur = (e) => {
    setErrors(validate(values));
  };

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  return { values, errors, handleBlur, handleChange };
};
