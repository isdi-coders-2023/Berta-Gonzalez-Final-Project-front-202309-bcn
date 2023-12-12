import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import BallNotFoundPage from "./BallNotFoundPage";

describe("Given a NotFound page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Dinochristmas not found' image", () => {
      const expectedAltText = "christmas dinosaur page not found";

      customRender(<BallNotFoundPage />);
      const pageNotFoundImage = screen.getByAltText(expectedAltText);

      expect(pageNotFoundImage).toBeInTheDocument();
    });
  });
});
