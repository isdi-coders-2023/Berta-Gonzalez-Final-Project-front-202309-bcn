import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import BallsLoading from "./BallsLoading";
import ballsMock from "../../mocks/ballsMock";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then it show should the text 'Loading...' in the alternative image text", () => {
      const expectedText = "Loading...";
      const mockData = ballsMock;

      customRender(<BallsLoading />, mockData);
      const image = screen.getByRole("heading", { name: expectedText });

      expect(image).toBeInTheDocument();
    });
  });
});
