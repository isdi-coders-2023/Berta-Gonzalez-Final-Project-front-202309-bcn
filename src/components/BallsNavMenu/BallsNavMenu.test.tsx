import { screen } from "@testing-library/react";
import { customRender } from "../../testUtils/customRender";
import BallsNavMenu from "./BallsNavMenu";
import ballsMock from "../../mocks/ballsMock";

describe("Given BallsNavMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an 'Add' text", () => {
      const expectedText = "add-form";
      const mockData = ballsMock;

      customRender(<BallsNavMenu />, mockData);
      const addText = screen.getByRole("link", { name: expectedText });

      expect(addText).toBeInTheDocument();
    });
  });
});
