import styled from "styled-components";

export const ThemeButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: 1em;
  font-size: 1rem;
  color: ${(props) => props.theme.color.white};
  border: 1px solid ${(props) => props.theme.color.white};
  padding: 0.5em;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.white};
  }
`;
