import { screen } from "@testing-library/react";
import {
  customRender,
  customRenderWithoutRouter,
} from "../../testUtils/customRender";
import BallsCard from "./BallsCard";
import userEvent from "@testing-library/user-event";
import server from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";
import { ballsMock, harryPotterMock } from "../../mocks/ballsMock";
import { MemoryRouter } from "react-router-dom";

afterEach(() => {
  vi.clearAllMocks();
});

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a BallsCard component", () => {
  const haveText = "Have:";
  const mockData = ballsMock;

  describe("When it receives a 'Harry Potter crew' card", () => {
    test("Then it should show the 'Harry Potter crew' into a heading", () => {
      const expectedHeadingText = ballsMock[0];

      customRender(<BallsCard ball={expectedHeadingText} />);
      const HarryBallName = screen.getByRole("heading", {
        name: expectedHeadingText.ballName,
      });

      expect(HarryBallName).toBeInTheDocument();
    });
  });

  describe("When it rendered 'Harry Potter crew' and its delete button is clicked", () => {
    const deleteButtonText = "Delete";

    test("Then it should show 'Nerdmas Ball deleted successfully", async () => {
      const ballCardName = "Harry Potter crew";

      customRender(<BallsCard ball={mockData[0]} />);
      const deleteButton = screen.getByRole("button", {
        name: deleteButtonText,
      });
      const heading = screen.getByRole("heading", { name: ballCardName });
      await userEvent.click(deleteButton);

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a feedback message with 'Nerdmas Ball deleted successfully'", async () => {
      const feedbackSuccess = "Nerdmas Ball deleted successfully";

      customRender(<BallsCard ball={mockData[0]} />);

      const deleteButton = screen.getByRole("button", {
        name: deleteButtonText,
      });
      await userEvent.click(deleteButton);
      const successMessage = screen.getByText(feedbackSuccess);

      expect(successMessage).toBeInTheDocument();
    });

    test("Then the promise is rejected and it should show a feedback message with 'Nerdmas Ball could not be deleted'", async () => {
      server.use(...errorHandlers);
      const feedbackError = "Nerdmas Ball could not be deleted";
      customRender(<BallsCard ball={mockData[0]} />);

      const deleteButton = screen.getByRole("button", {
        name: deleteButtonText,
      });
      await userEvent.click(deleteButton);
      const errorText = screen.getByText(feedbackError);

      expect(errorText).toBeInTheDocument();
    });

    describe("When it rendered 'Harry Potter crew' and its have checkbox is clicked", () => {
      test("Then it should show a feedback message with 'Nerdmas Ball change successfully'", async () => {
        const feedbackSuccess = "Nerdmas Ball change successfully";

        customRender(<BallsCard ball={mockData[0]} />);

        const checkboxText = screen.getByRole("checkbox", {
          name: haveText,
        });

        await userEvent.click(checkboxText);

        const feedbackMessage = screen.getByText(feedbackSuccess);

        expect(feedbackMessage).toBeInTheDocument();
      });
    });

    test("Then it should show a feedback message with 'Nerdmas Ball could not be changed'", async () => {
      const feedbackSuccess = "Nerdmas Ball could not be changed";
      server.use(...errorHandlers);

      customRender(<BallsCard ball={mockData[0]} />);

      const checkboxText = screen.getByRole("checkbox", {
        name: haveText,
      });

      await userEvent.click(checkboxText);

      const feedbackMessage = screen.getByText(feedbackSuccess);

      expect(feedbackMessage).toBeInTheDocument();
    });
  });

  describe("When the user clicks in 'Info' button", () => {
    test("Then it should be a link", () => {
      const textButton = "Info";
      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/balls/656241b0c4ddfcae991f0b13"]}>
          <BallsCard ball={harryPotterMock} />
        </MemoryRouter>,
      );

      const link = screen.getByRole("button", { name: textButton });

      expect(link).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the 'Info' button", () => {
    test("Then it should be redirected to 'Harry Potter crew' detail page", () => {
      const expectedTitle = "Harry Potter crew";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["/balls/656241b0c4ddfcae991f0b13"]}>
          <BallsCard ball={harryPotterMock} />
        </MemoryRouter>,
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
