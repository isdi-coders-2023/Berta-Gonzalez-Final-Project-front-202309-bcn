import { screen } from "@testing-library/dom";
import { customRender } from "../../testUtils/customRender";
import BallsHomePage from "./BallsHomePage";
import ballsMock from "../../mocks/ballsMock";

describe("Given a BallsHomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Mark your have and lack'", () => {
      const expectedTitle = "Mark your have and lack";
      const mockData = ballsMock;

      customRender(<BallsHomePage />, mockData);
      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
