export const validate = (values) => {
  let errors = {};
  if (!values.fullName) {
    errors.fullName = "This field is required.";
  } else if (!/^[^0-9]*$/.test(values.fullName)) {
    errors.fullName =
      "Invalid email. Only string chars or special symbols, please";
  }

  return errors;
};
