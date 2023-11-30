import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import BallsNavMenu from "./BallsNavMenu";

describe("Given BallsNavMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an 'Add' text", () => {
      const expectedText = "Add";

      customRender(<BallsNavMenu />);
      const addText = screen.getByText(expectedText);

      expect(addText).toBeInTheDocument();
    });
  });
});
