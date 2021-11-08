import React from "react";
import { StyledFieldset, StyledForm, StyledFormFooter } from "./Form.styles";

export const Form = ({ children }) => {
  return <StyledForm onSubmit={(e) => e.preventDefault()}>{children}</StyledForm>;
};

export const FormFooter = ({ children }) => {
  return <StyledFormFooter>{children}</StyledFormFooter>;
};

export const FormFieldset = ({ children }) => {
  return <StyledFieldset>{children}</StyledFieldset>;
};
