import styled from "styled-components";
import { StyledContainer } from "../Container/Container.styles";

export const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0px;

  background-color: ${(props) => props.theme.color.primary || '#red'};
  color: ${(props) => props.theme.color.white};
  box-shadow: ${(props) => props.theme.shadow.default};

  & h1 {
    font-size: 1.5rem;
    font-weight: 300;
  }

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.color.white};
    padding: 0.5em;
    border-radius: 5px;
    font-weight: 300;
    margin-right: 0.5em;
    background-color: transparent;
    transition: all 200ms ease-in-out;

    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary};
      background-color: ${(props) => props.theme.color.white};
    }
  }
`;

export const HeaderContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;