import userEvent from "@testing-library/user-event";
import {
  customRender,
  customRenderWithoutRouter,
} from "../../testUtils/customRender";
import BallDetailPage from "./BallDetailPage";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<object>("react-router-dom");
  return {
    ...actual,
    useParams: vi.fn().mockReturnValue({ ballId: "656241b0c4ddfcae991f0b13" }),
  };
});

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
  describe("When the BallDetailPage is rendered and the Delete button is clicked", () => {
    test("Then it should shou 'See all the details' text inside a heading", async () => {
      const textButton = "Delete";
      const modifyPageHeading = "See all the details";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/:ballId"]}>
          <BallDetailPage />,
        </MemoryRouter>,
      );

      const button = screen.getByRole("button", { name: textButton });
      await userEvent.click(button);

      const title = await screen.findByRole("heading", {
        name: modifyPageHeading,
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When the BallDetailPage is rendered and the Modify button is clicked", () => {
    test("Then it should shou 'See all the details' text inside a heading", async () => {
      const expectedModifyButton = "Modify";
      const expectedModifyTitlePage = "See all the details";

      customRender(<BallDetailPage />);

      const modifyButton = screen.getAllByRole("button", {
        name: expectedModifyButton,
      });

      await userEvent.click(modifyButton[0]);

      const modifyTitlePage = await screen.findByRole("heading", {
        name: expectedModifyTitlePage,
      });

      expect(modifyTitlePage).toBeInTheDocument();
    });
  });

  describe("When the BallDetailPage is rendered", () => {
    test("Then it should show 'Harry Potter crew' image", async () => {
      const alternativeText = "Harry Potter crew";

      customRender(<BallDetailPage />);

      const image = await screen.findByRole("img", { name: alternativeText });

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it rendered 'Harry Potter crew' and its have checkbox is clicked", () => {
    test("Then it should show a feedback message with 'Nerdmas Ball change successfully'", async () => {
      const haveText = "Have:";
      const feedbackSuccess = "Nerdmas Ball change successfully";

      customRender(<BallDetailPage />);

      const checkboxText = screen.getByRole("checkbox", {
        name: haveText,
      });

      await userEvent.click(checkboxText);

      const feedbackMessage = screen.getByText(feedbackSuccess);

      expect(feedbackMessage).toBeInTheDocument();
    });
  });
});
