export const validate = (values) => {
  let errors = {};
  if (!values.fullName) {
    errors.fullName = `The Full Name field is required.`;
  } else if (!/^[^0-9]*$/.test(values.fullName)) {
    errors.fullName =
      "Invalid Full Name. Only string chars or special symbols, please";
  }

  if (!values.areaSqr) {
    errors.areaSqr = "The Area field is required.";
  } else if (Number(values.areaSqr) <= 0) {
    errors.areaSqr = "The Area field only accepts positive numbers.";
  }

  return errors;
};
