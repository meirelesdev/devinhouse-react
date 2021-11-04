import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  @media ${(props) => props.theme.screen.medium} {
    width: 100%;
  } ;
`;
