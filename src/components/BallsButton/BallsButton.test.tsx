import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import BallsButton from "./BallsButton";
import ballsMock from "../../mocks/ballsMock";

describe("Given a Button component", () => {
  describe("When it receives the text 'Info'", () => {
    test("Then it should show the text 'Info'", () => {
      const expectedButtonText = "info";
      const mockData = ballsMock;

      customRender(
        <BallsButton
          text={expectedButtonText}
          type="button"
          classModifier=""
        />,
        mockData,
      );
      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
