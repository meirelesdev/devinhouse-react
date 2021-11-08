import React from "react";
import PropType from "prop-types";
import * as C from './TextInput.styles'
export const TextInput = props => {
  const { id, nome, titulo = "Título do campo", placeholder = null } = props;
  return (
    <C.Container>
      <C.Label htmlFor={id}>
        {titulo}
      </C.Label>
      <C.Input id={id ?? nome} name={nome} type="text" placeholder={placeholder} />
    </C.Container>
  );
}

TextInput.propTypes = {
  id: PropType.string,
  nome: PropType.string,
  titulo: PropType.string,
  placeholder: PropType.string,
};
