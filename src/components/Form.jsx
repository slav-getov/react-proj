import React from "react";
import styled from "styled-components";
const FormStyles = styled.form`
  padding: 1rem;
`;
const Form = () => {
  return (
    <FormStyles>
      <fieldset>
        <legend>Request maintenance quote</legend>
        <p>
          <label for="land_size_input">
            Land size
            <input type="text" name="size" id="land_size_input" value="small" />
          </label>
        </p>
        <p>
          <input type="radio" name="size" id="size_2" value="medium" />
          <label for="size_2">Medium</label>
        </p>
        <p>
          <input type="radio" name="size" id="size_3" value="large" />
          <label for="size_3">Large</label>
        </p>
      </fieldset>
    </FormStyles>
  );
};

export default Form;
