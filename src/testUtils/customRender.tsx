import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { ballsReducer } from "../store/features/balls/ballsSlice";
import { MemoryRouter } from "react-router";
import { uiReducer } from "../store/features/ui/uiSlice";
import { ballsMock } from "../mocks/ballsMock";
import { BallsStructure } from "../store/features/balls/types";
import ToastStyled from "../styles/shared/ToastStyled";
import ScrollToTop from "../utils/ScrollToTopFunction";

export const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      ballsState: ballsReducer,
      uiState: uiReducer,
    },
    preloadedState: {
      ballsState: {
        balls: ballsMock,
        selectedBall: {} as BallsStructure,
      },
      uiState: { isLoading: false },
    },
  });

  render(
    <MemoryRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>
          <ToastStyled />
          <ScrollToTop />
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    </MemoryRouter>,
  );
};

export const customRenderWithoutRouter = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      ballsState: ballsReducer,
      uiState: uiReducer,
    },
    preloadedState: {
      ballsState: {
        balls: ballsMock,
        selectedBall: {} as BallsStructure,
      },
      uiState: { isLoading: false },
    },
  });

  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Provider store={mockStore}>{children}</Provider>
    </ThemeProvider>,
  );
};
