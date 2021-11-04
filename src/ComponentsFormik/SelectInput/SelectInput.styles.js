import styled from "styled-components";
import { StyledFormGroup, StyledLabel } from "../TextInput/TextInput.styles";

export const StyledSelectGroup = styled(StyledFormGroup)``;

export const StyledSelectLabel = styled(StyledLabel)``;

export const StyledSelect = styled.select`
  font-size: 1rem;
  padding: 0.75em;
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 5px;
  color: ${(props) => props.theme.color.text};
`;
