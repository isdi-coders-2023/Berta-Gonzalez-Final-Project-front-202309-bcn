import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import BallsAddPage from "./BallsAddPage";

describe("Given a BallsAddPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Add a new Nerdmas Ball' inside a heading", () => {
      const expectedTitle = "Add a new Nerdmas Ball";

      customRender(<BallsAddPage />);
      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });

    test("Then it should a form with a 'Ball Name' lable text", () => {
      const expectedLabelText = "Ball Name";

      customRender(<BallsAddPage />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Create' inside", () => {
      const expectedButtonText = "Create";

      customRender(<BallsAddPage />);
      const buttonText = screen.getByText(expectedButtonText);

      expect(buttonText).toBeInTheDocument();
    });
  });
});
