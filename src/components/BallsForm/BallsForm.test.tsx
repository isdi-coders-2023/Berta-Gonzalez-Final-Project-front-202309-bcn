import { fireEvent, screen } from "@testing-library/react";
import {
  customRender,
  customRenderWithoutRouter,
} from "../../testUtils/customRender";
import BallsForm from "./BallsForm";
import userEvent from "@testing-library/user-event";

describe("Given a BallsForm component", () => {
  const expectedButtonText = "Create";
  const actionOnClick = vi.fn();

  describe("When it's rendered", () => {
    test("Then it should show a form with a 'Ball Name' label text", () => {
      const expectedLabelText = "Ball Name";

      customRenderWithoutRouter(<BallsForm submitAction={actionOnClick} />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Create'", () => {
      customRenderWithoutRouter(<BallsForm submitAction={actionOnClick} />);

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user checks 'Have' checkbox", () => {
    test("Then it should show the checkbox as checked", async () => {
      const haveInputText = "Have";

      customRenderWithoutRouter(<BallsForm submitAction={actionOnClick} />);

      const checkboxInput = screen.getByRole("checkbox", {
        name: haveInputText,
      });

      await userEvent.click(checkboxInput);

      expect(checkboxInput).toBeChecked();
    });
  });

  describe("When it's rendered and the user types in all the text input fields", () => {
    test("Then int should show the writen text in the fields", async () => {
      const expectInputText = "Never ending story";

      customRenderWithoutRouter(<BallsForm submitAction={actionOnClick} />);

      const labelText = screen.getByLabelText("Ball Name");

      await userEvent.type(labelText, expectInputText);

      const inputText = screen.getByDisplayValue(expectInputText);

      expect(inputText).toBeInTheDocument();
    });
  });

  describe("When user clicks on create new ball button", () => {
    test("Then it should call it onSubmit action", () => {
      const labelText = "Ball Name";
      customRender(<BallsForm submitAction={actionOnClick} />);

      const ballForm = screen.getByLabelText(labelText);
      fireEvent.submit(ballForm);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
