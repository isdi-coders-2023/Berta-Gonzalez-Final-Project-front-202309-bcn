import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import ModifyBallPage from "./ModifyBallPage";

describe("Given a ModifyBallPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Modify the ball'", () => {
      const modifyBallPageTitle = "Modify the ball";

      customRender(<ModifyBallPage />);

      const modifyBallHeading = screen.getByRole("heading", {
        name: modifyBallPageTitle,
      });

      expect(modifyBallHeading).toBeInTheDocument();
    });

    test("Then it should show a form with a 'Ball Name' label text", () => {
      const expectedLabelText = "Ball Name";

      customRender(<ModifyBallPage />);

      const labelText = screen.getByLabelText(expectedLabelText);

      expect(labelText).toBeInTheDocument();
    });
  });
});
