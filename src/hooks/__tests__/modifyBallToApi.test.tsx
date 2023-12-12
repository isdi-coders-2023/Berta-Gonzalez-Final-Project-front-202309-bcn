import { renderHook, screen } from "@testing-library/react";
import useBallsApi from "../useBallsApi";
import { providerWrapper } from "../../testUtils/customWrapper";
import { ballsModifyMock } from "../../mocks/ballsMock";
import server from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";
import { customRenderWithoutRouter } from "../../testUtils/customRender";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App/App";

describe("Given a useBallsApi hook", () => {
  const path = "/balls/656241b0c4ddfcae991f0b13/modify";

  const {
    result: {
      current: { modifyBall },
    },
  } = renderHook(() => useBallsApi(), { wrapper: providerWrapper });

  const mockModifiedBalls = ballsModifyMock;
  const modifiedBallId = mockModifiedBalls[0]._id;

  describe("When it is called with its modifyBall function with an 'Harry Potter' ball", () => {
    test("Then it should show the text 'Nerdmas Ball modified successfully' as a user feedback", async () => {
      const response = await modifyBall(modifiedBallId, mockModifiedBalls[0]);

      expect(response).toStrictEqual(mockModifiedBalls);
    });
  });

  describe("When it is called with its modifyBall function with 'Harry Potter crew' and the response fails", () => {
    test("Then it should the text 'Nerdmas Ball could not be modified' as a feedback message", async () => {
      server.use(...errorHandlers);

      const feedbackMessage = "Nerdmas Ball could not be modified";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      await modifyBall(modifiedBallId, mockModifiedBalls[0]);
      const feedback = await screen.findByText(feedbackMessage);

      expect(feedback).toBeInTheDocument();
    });
  });
});
