import PropType from "prop-types";
import { StyledFormGroup, StyledInput, StyledLabel } from "./TextInput.styles";

export function TextInput(props) {
  const { type, id, name, label = "Título do campo", placeholder = null, value, onChange, ...outros } = props;

  return (
    <StyledFormGroup>
      <StyledLabel htmlFor={id || name}>{label}</StyledLabel>
      {type === "textarea" ? (
        <StyledInput
          as="textarea"
          rows={4}
          id={id ?? name}
          name={name}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...outros.field}
        />
      ) : (
        <StyledInput
          id={id ?? name}
          name={name}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...outros.field}
        />
      )}
    </StyledFormGroup>
  );
}

TextInput.propTypes = {
  id: PropType.string,
  nome: PropType.string,
  titulo: PropType.string,
  placeholder: PropType.string,
};
