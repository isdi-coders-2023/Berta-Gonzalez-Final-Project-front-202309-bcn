import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2 {
    margin: 0;
  }

  body {
    color: ${({ theme }) => theme.color.mainFontColor};
    font-family: ${({ theme }) => theme.typography.mainFontFamily}
  }

  ul,
  li {
    list-style: none;
    margin-top: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background-color: transparent;
    font: inherit;
    cursor: pointer;
  }

  input, 
  textarea {
    font: inherit;
    border: none;
  }

  
`;

export default GlobalStyle;
