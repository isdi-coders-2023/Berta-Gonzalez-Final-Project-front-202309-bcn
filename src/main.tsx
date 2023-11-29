import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "@fontsource/patrick-hand";
import "@fontsource/patrick-hand/400.css";
import mainTheme from "./styles/MainTheme";
import GlobalStyled from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyled />
      <div />
    </ThemeProvider>
  </React.StrictMode>,
);
