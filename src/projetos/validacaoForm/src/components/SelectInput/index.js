import React from "react";
import { StyledSelect, StyledSelectGroup, StyledSelectLabel } from "./SelectInput.styles";

export const SelectInput = ({ options = [], id, name, value, label, onChange, ...outros }) => {
  return (
    <StyledSelectGroup>
      <StyledSelectLabel htmlFor={id || name}>{label}</StyledSelectLabel>
      <StyledSelect id={id || name} value={value} name={name} onChange={onChange} {...outros.field}>
        <option>Escolha...</option>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectGroup>
  );
};
