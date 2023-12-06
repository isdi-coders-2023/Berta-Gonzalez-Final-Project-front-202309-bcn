import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { ballsReducer } from "../store/features/balls/ballsSlice";
import { BallsStructure } from "../store/features/balls/types";
import { MemoryRouter } from "react-router";
import { uiReducer } from "../store/features/ui/uiSlice";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

export const customRender = (
  children: React.ReactElement,
  ballsMock: BallsStructure[],
) => {
  const mockStore = configureStore({
    reducer: {
      ballsState: ballsReducer,
      uiState: uiReducer,
    },
    preloadedState: {
      ballsState: { balls: ballsMock },
      uiState: { isLoading: false },
    },
  });

  render(
    <MemoryRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>
          <ToastContainer />
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    </MemoryRouter>,
  );
};

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
