import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.base.background};
    font-family: "Baloo 2", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #ccc;
  }
`