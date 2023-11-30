import { screen } from "@testing-library/dom";
import customRender from "../../testUtils/customRender";
import BallsHomePage from "./BallsHomePage";

describe("Given a BallsHomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Mark your have and lack'", () => {
      const expectedTitle = "Mark your have and lack";

      customRender(<BallsHomePage />);
      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
