import styled from "styled-components";

export const StyledFormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.75em 0;
`;

export const StyledLabel = styled.label`
  font-size: 0.85rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.color.text};
`;

export const StyledInput = styled.input`
  font-size: 1.25rem;
  padding: 0.5em;
  border: 1px solid ${(props) => props.theme.color.gray};
  border-radius: 5px;

  resize: none;
`;
