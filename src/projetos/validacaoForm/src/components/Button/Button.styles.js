import styled from "styled-components";

function getBackgroundColor(variant, theme) {
  return theme.color[variant];
}

export const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.6em;
  border: none;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.shadow.default};
  color: ${(props) => props.theme.color.white};
  opacity: 1;
  cursor: pointer;
  transition: opacity 180ms ease-in-out;
  background-color: ${({ theme, variant }) => getBackgroundColor(variant, theme)};
  
  &:hover {
    opacity: 0.75;
  }
`;