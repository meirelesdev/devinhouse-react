import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledFormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledFieldset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border: 1px groove ${(props) => props.theme.color.gray};
  margin: 1em 0;
  box-shadow: ${(props) => props.theme.shadow.default};
`;