import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
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

ul,
li {
  list-style: none;
  margin-top: 0;
  padding: 0;
}

img {
  width: 100%;
}

a{
  text-decoration: none;
  color: inherit;
}

button{
  border: none;
  background-color: transparent;
  font: inherit;
  cursor: pointer;
}
`;

export default GlobalStyled;
