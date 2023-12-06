import { screen, waitFor } from "@testing-library/react";
import ballsMock from "../../mocks/ballsMock";
import { customRender } from "../../testUtils/customRender";
import BallsCard from "./BallsCard";
import userEvent from "@testing-library/user-event";
import server from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";

afterEach(() => {
  vi.clearAllMocks();
});

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a BallsCard component", () => {
  const mockData = ballsMock;
  const haveText = "Have:";

  describe("When it receives a 'Harry Potter crew' card", () => {
    test("Then it should show the 'Harry Potter crew' into a heading", () => {
      const expectedHeadingText = ballsMock[0];

      customRender(<BallsCard ball={expectedHeadingText} />, mockData);
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

      customRender(<BallsCard ball={mockData[0]} />, mockData);
      const deleteButton = screen.getByRole("button", {
        name: deleteButtonText,
      });
      const heading = screen.getByRole("heading", { name: ballCardName });
      await userEvent.click(deleteButton);

      waitFor(() => {
        expect(heading).not.toBeInTheDocument();
      });
    });

    test("Then it should show a feedback message with 'Nerdmas Ball deleted successfully'", async () => {
      const feedbackSuccess = "Nerdmas Ball deleted successfully";

      customRender(<BallsCard ball={mockData[0]} />, mockData);

      const deleteButton = screen.getByRole("button", {
        name: deleteButtonText,
      });
      await userEvent.click(deleteButton);

      expect(screen.getByText(feedbackSuccess)).toBeInTheDocument();
    });

    test("Then the promise is rejected and it should show a feedback message with 'Nerdmas Ball could not be deleted'", async () => {
      server.use(...errorHandlers);
      const feedbackError = "Nerdmas Ball could not be deleted";
      customRender(<BallsCard ball={mockData[0]} />, mockData);

      const deleteButton = screen.getByRole("button", {
        name: deleteButtonText,
      });
      await userEvent.click(deleteButton);

      expect(screen.getByText(feedbackError)).toBeInTheDocument();
    });

    describe("When it rendered 'Harry Potter crew' and its have checkbox is clicked", () => {
      test("Then it should show a feedback message with 'Nerdmas Ball change successfully'", async () => {
        const feedbackSuccess = "Nerdmas Ball change successfully";

        customRender(<BallsCard ball={mockData[0]} />, mockData);

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

      customRender(<BallsCard ball={mockData[0]} />, mockData);

      const checkboxText = screen.getByRole("checkbox", {
        name: haveText,
      });

      await userEvent.click(checkboxText);

      const feedbackMessage = screen.getByText(feedbackSuccess);

      expect(feedbackMessage).toBeInTheDocument();
    });
  });
});
