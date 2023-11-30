import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Nerdmas Balls' logo", () => {
      const expectedAltText = "Nerdmas Balls logo";

      customRender(<App />);

      const headerLogo = screen.getByAltText(expectedAltText);

      expect(headerLogo).toBeInTheDocument();
    });
  });
});
