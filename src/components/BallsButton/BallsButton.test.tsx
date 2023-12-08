import { screen } from "@testing-library/react";
import { customRenderWithoutRouter } from "../../testUtils/customRender";
import BallsButton from "./BallsButton";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it receives the text 'Info'", () => {
    test("Then it should show the text 'Info'", () => {
      const expectedButtonText = "info";

      customRenderWithoutRouter(
        <BallsButton text={expectedButtonText} type="button" />,
      );
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives the action delete and click from user", () => {
    test("Then it should call the received function", async () => {
      const buttonText = "Delete";
      const deleteActionMock = vi.fn();

      customRenderWithoutRouter(
        <BallsButton
          text={buttonText}
          actionOnClick={deleteActionMock}
          type="button"
        />,
      );

      const button = screen.getByRole("button", { name: buttonText });
      await userEvent.click(button);

      expect(deleteActionMock).toHaveBeenCalledOnce();
    });
  });
});
