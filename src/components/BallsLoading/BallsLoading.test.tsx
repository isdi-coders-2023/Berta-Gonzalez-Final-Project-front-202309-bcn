import { screen } from "@testing-library/react";
import { customRenderWithoutRouter } from "../../testUtils/customRender";
import BallsLoading from "./BallsLoading";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then it show should the text 'Loading...' in the alternative image text", () => {
      const expectedText = "Loading...";

      customRenderWithoutRouter(<BallsLoading />);
      const image = screen.getByRole("heading", { name: expectedText });

      expect(image).toBeInTheDocument();
    });
  });
});
