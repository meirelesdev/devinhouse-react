import PropTypes from "prop-types";
import React from "react";
import * as C from './Button.styles'


export const Button = props => {
  const { onClick, titulo = "Botão" } = props;
  return (
    <C.Button cor={props.cor} onClick={onClick}>
      {titulo}
    </C.Button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
