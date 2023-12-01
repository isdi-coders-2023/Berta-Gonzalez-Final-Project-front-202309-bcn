import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import BallsButton from "./BallsButton";

describe("Given a Button component", () => {
  describe("When it receives the text 'Info'", () => {
    test("Then it should show the text 'Info'", () => {
      const expectedButtonText = "info";

      customRender(
        <BallsButton text={expectedButtonText} type="button" modifier="" />,
      );
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
