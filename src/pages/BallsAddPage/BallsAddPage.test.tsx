import { screen } from "@testing-library/react";
import ballsMock from "../../mocks/ballsMock";
import { customRender } from "../../testUtils/customRender";
import BallsAddPage from "./BallsAddPage";

describe("Given a BallsAddPage component", () => {
  const mockData = ballsMock;

  describe("When it is rendered", () => {
    test("Then it should show the title 'Add a new Nerdmas Ball' inside a heading", () => {
      const expectedTitle = "Add a new Nerdmas Ball";

      customRender(<BallsAddPage />, mockData);
      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
