import styled from "styled-components";

export const StyledPaper = styled.div`
  background-color: ${(props) => props.theme.color.paper};
  border-radius: 5px;
  width: 100%;
  min-height: 180px;
  padding: 1.25em;

  & > h2 {
    margin-bottom: 0.75em;
  }
`;
