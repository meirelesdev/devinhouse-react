import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.color.text};
  }

  body {
    background-color: ${({ theme }) => theme.color.background};
    position: relative;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }

  input, button {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    color: ${({ theme }) => theme.color.text};
  }
`;
