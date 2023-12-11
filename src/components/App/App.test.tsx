import { renderHook, screen } from "@testing-library/react";
import {
  customRender,
  customRenderWithoutRouter,
} from "../../testUtils/customRender";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import useBallsApi from "../../hooks/useBallsApi";
import { gremlinsMock } from "../../mocks/ballsMock";
import { providerWrapper } from "../../testUtils/customWrapper";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Nerdmas Balls' logo", () => {
      const expectedAltText = "Nerdmas Balls logo";

      customRender(<App />);

      const altText = screen.getByRole("img", { name: expectedAltText });

      expect(altText).toBeInTheDocument();
    });

    describe("When it receives a click on the 'Home' link", () => {
      test("Then it should show a title 'Mark your have and lack' on a Heading", () => {
        const homepageTitle = "Mark your have and lack";
        const homeLink = "home";

        customRender(<App />);
        const link = screen.getByRole("link", { name: homeLink });
        const title = screen.getByRole("heading", { name: homepageTitle });

        expect(title).toBeInTheDocument();
        expect(link).toBeInTheDocument();
      });
    });
  });

  describe("When it is called with its addBalls function with 'Gremlins' and the response fail", () => {
    test("Then it should show the text 'Nerdmas Ball added successfully'", async () => {
      const path = "/add";
      const errorMessage = "Nerdmas Ball added successfully";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { addBalls },
        },
      } = renderHook(() => useBallsApi(), { wrapper: providerWrapper });

      await addBalls(gremlinsMock);
      const failFeedback = await screen.findByText(errorMessage);

      expect(failFeedback).toBeInTheDocument();
    });
  });
});
