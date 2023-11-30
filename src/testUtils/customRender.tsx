import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/MainTheme";
import GlobalStyled from "../styles/GlobalStyle";
import { ballsReducer } from "../store/features/balls/ballsSlice";
import ballsMock from "../mocks/ballsMock";

const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { ballsState: ballsReducer },
    preloadedState: { ballsState: { balls: ballsMock } },
  });

  render(
    <BrowserRouter>
      <GlobalStyled />
      <ThemeProvider theme={mainTheme}>
        <Provider store={mockStore}>{children}</Provider>
      </ThemeProvider>
    </BrowserRouter>,
  );
};

export default customRender;
