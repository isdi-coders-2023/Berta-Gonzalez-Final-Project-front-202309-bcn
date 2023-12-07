import { screen } from "@testing-library/react";
import ballsMock from "../../mocks/ballsMock";
import { customRender } from "../../testUtils/customRender";
import BallsForm from "./BallsForm";
import userEvent from "@testing-library/user-event";

describe("Given a BallsForm component", () => {
  const mockData = ballsMock;

  describe("When it's rendered", () => {
    test("Then it should show a form with a 'Ball Name' label text", () => {
      const expectedLabelText = "Ball Name";

      customRender(<BallsForm />, mockData);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Create'", () => {
      const expectedButtonText = "Create";

      customRender(<BallsForm />, mockData);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user checks 'Have' checkbox", () => {
    test("Then it should show the checkbox as checked", async () => {
      const haveInputText = "Have";

      customRender(<BallsForm />, mockData);

      const checkboxInput = screen.getByRole("checkbox", {
        name: haveInputText,
      });

      await userEvent.click(checkboxInput);

      expect(checkboxInput).toBeChecked();
    });
  });
});
