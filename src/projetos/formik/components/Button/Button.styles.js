import styled from "styled-components";

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.6em;
  border: none;
  border-radius: var(--borda-radius);
  box-shadow: var(--sombra-padrao);
  color: var(--cor-texto-padrao);
  
  opacity: 1;
  cursor: pointer;
  transition: opacity 180ms ease-in-out;
  color: var(--cor-branco);
  background-color: ${props => props.cor};

  &:hover {
      opacity: 0.55;
  }
`;