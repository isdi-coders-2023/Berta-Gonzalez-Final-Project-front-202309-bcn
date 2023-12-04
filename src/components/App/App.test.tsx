import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import App from "./App";
import ballsMock from "../../mocks/ballsMock";

describe("Given an App component", () => {
  const mockData = ballsMock;

  describe("When it's rendered", () => {
    test("Then it should show 'Nerdmas Balls' logo", () => {
      const expectedAltText = "Nerdmas Balls logo";

      customRender(<App />, mockData);

      const altText = screen.getByRole("img", { name: expectedAltText });

      expect(altText).toBeInTheDocument();
    });

    describe("When it receives a click on the 'Home' link", () => {
      test("Then it should show a title 'Mark your have and lack' on a Heading", () => {
        const homepageTitle = "Mark your have and lack";
        const homeLink = "Home";

        customRender(<App />, mockData);
        const link = screen.getByRole("link", { name: homeLink });
        const title = screen.getByRole("heading", { name: homepageTitle });

        expect(title).toBeInTheDocument();
        expect(link).toBeInTheDocument();
      });
    });
  });
});
