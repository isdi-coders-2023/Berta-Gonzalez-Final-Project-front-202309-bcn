import { customRender } from "../../testUtils/customRender";
import BallDetailPage from "./BallDetailPage";
import { screen } from "@testing-library/react";

describe("Given a BallsDetailPage page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a ball with the text 'Description'", () => {
      const expectedText = "Description:";

      customRender(<BallDetailPage />);

      const descriptionText = screen.getByText(expectedText);

      expect(descriptionText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Modify' inside", () => {
      const expectedButtonText = "Modify";

      customRender(<BallDetailPage />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
