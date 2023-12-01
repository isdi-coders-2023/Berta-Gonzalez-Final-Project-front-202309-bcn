import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import BallsList from "./BallsList";
import ballsMock from "../../mocks/ballsMock";

describe("Given a BallsList component", () => {
  describe("When it receives a list with 3 balls", () => {
    test("Then it should show number 3", () => {
      const expectedBallsLength = 3;

      customRender(<BallsList />);
      const listItemsLength = screen.getAllByRole("heading").length;

      expect(listItemsLength).toBe(expectedBallsLength);
    });

    test("Then it should show an image of 'Mario Bross' ball", () => {
      const expectedmarioImage = ballsMock[2].ballName;

      customRender(<BallsList />);
      const marioImage = screen.getByAltText(expectedmarioImage);

      expect(marioImage).toBeInTheDocument();
    });
  });
});
