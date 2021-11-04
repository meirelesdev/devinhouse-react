import PropTypes from "prop-types";
import React from "react";
import { StyledButton } from "./Button.styles";

export function Button(props) {
  const { onClick, title = "Botão", variant = "info" } = props;

  return (
    <StyledButton type="button" variant={variant} onClick={onClick}>
      {title}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
