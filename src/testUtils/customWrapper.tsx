import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../store";
import { PropsWithChildren } from "react";

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
};
