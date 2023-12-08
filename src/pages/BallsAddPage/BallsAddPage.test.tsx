import { screen } from "@testing-library/react";
import { customRenderWithoutRouter } from "../../testUtils/customRender";
import BallsAddPage from "./BallsAddPage";

describe("Given a BallsAddPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Add a new Nerdmas Ball' inside a heading", () => {
      const expectedTitle = "Add a new Nerdmas Ball";

      customRenderWithoutRouter(<BallsAddPage />);
      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
