import React from "react";
import PropTypes from "prop-types";
import * as C from './FormHeader.styles'

export const FormHeader = ({ titulo = "Um título", subtitulo = "um subtítulo" }) => {
  return (
    <C.Header>
      <C.H2>{titulo}</C.H2>
      <C.Span >{subtitulo}</C.Span>
    </C.Header>
  );
};

FormHeader.propTypes = {
  titulo: PropTypes.string,
  subtitulo: PropTypes.string,
};
