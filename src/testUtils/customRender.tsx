import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/MainTheme";
import GlobalStyled from "../styles/GlobalStyle";

const customRender = (children: React.ReactElement) =>
  render(
    <BrowserRouter>
      <GlobalStyled />
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </BrowserRouter>,
  );

export default customRender;
