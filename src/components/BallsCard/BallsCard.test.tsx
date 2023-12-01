import { screen } from "@testing-library/react";
import ballsMock from "../../mocks/ballsMock";
import customRender from "../../testUtils/customRender";
import BallsCard from "./BallsCard";

describe("Given a BallsCard component", () => {
  describe("When it receives a 'Harry Potter crew' card", () => {
    test("Then it should show the 'Harry Potter crew' into a heading", () => {
      const expectedHeadingText = ballsMock[0];

      customRender(<BallsCard ball={expectedHeadingText} />);
      const HarryBallName = screen.getByRole("heading", {
        name: expectedHeadingText.ballName,
      });

      expect(HarryBallName).toBeInTheDocument();
    });
  });
});
