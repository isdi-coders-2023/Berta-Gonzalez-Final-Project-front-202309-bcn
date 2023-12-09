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
      const expectInputText = "Gremlins";

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

  describe("When it is rendered and the user fills all the inputs and clicks the 'Create' button", () => {
    test("Then it should call its onSubmit function", async () => {
      const expectedInputText = "Proof";
      const expectedInputNumber = 25;
      const expectedInputBoolean = true;
      const expectedCheckboxLabelText = "Have";
      const expectedButtonText = "Create";
      const ballNameLabelText = "Ball Name";
      const availableLabelText = "Is Available";
      const collectionLabelText = "Collection";
      const shopLabelText = "Shop";
      const yearReleaseLabelText = "Year of Release";
      const priceLabelText = "Price in €";
      const imageUrlLabelText = "Image URL";
      const descriptionLabelText = "Description";

      customRender(<BallsForm submitAction={actionOnClick} />);

      const inputBallNameElement = screen.getByLabelText(ballNameLabelText);
      await userEvent.type(inputBallNameElement, expectedInputText);

      const inputAvailableElement = screen.getByLabelText(availableLabelText);
      await userEvent.type(
        inputAvailableElement,
        expectedInputBoolean.toString(),
      );

      const inputCollectionElement = screen.getByLabelText(collectionLabelText);
      await userEvent.type(inputCollectionElement, expectedButtonText);

      const inputShopElement = screen.getByLabelText(shopLabelText);
      await userEvent.type(inputShopElement, expectedButtonText);

      const inputYearReleaseElement =
        screen.getByLabelText(yearReleaseLabelText);
      await userEvent.type(
        inputYearReleaseElement,
        expectedInputNumber.toString(),
      );

      const inputPriceElement = screen.getByLabelText(priceLabelText);
      await userEvent.type(inputPriceElement, expectedInputNumber.toString());

      const inputImageUrlElement = screen.getByLabelText(imageUrlLabelText);
      await userEvent.type(inputImageUrlElement, expectedButtonText);

      const inputDescriptionElement =
        screen.getByLabelText(descriptionLabelText);
      await userEvent.type(inputDescriptionElement, expectedButtonText);

      const formCheckboxElement = screen.getByRole("checkbox", {
        name: expectedCheckboxLabelText,
      });

      const formButtonElement = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(formCheckboxElement);
      await userEvent.click(formButtonElement);

      await expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
