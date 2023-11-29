import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import BallsHeader from "./BallsHeader";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an logo image with an alternative text 'Nerdmas Balls logo'", () => {
      const expectedAltText = "Nerdmas Balls logo";

      customRender(<BallsHeader />);
      const altText = screen.getByRole("img", { name: expectedAltText });

      expect(altText).toBeInTheDocument();
    });
  });
});
