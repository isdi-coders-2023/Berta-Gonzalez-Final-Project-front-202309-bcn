import { renderHook, screen } from "@testing-library/react";
import { ballAddMock, ballsMock } from "../../mocks/ballsMock";
import useBallsApi from "../useBallsApi";
import { providerWrapper } from "../../testUtils/customWrapper";
import server from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";
import { customRenderWithoutRouter } from "../../testUtils/customRender";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App/App";

describe("given a useBallsApi custom hook", () => {
  const ballsList = ballsMock;

  const {
    result: {
      current: { addBalls },
    },
  } = renderHook(() => useBallsApi(), { wrapper: providerWrapper });

  describe("When it calls its addNewBallToApi method with 'Gremlins'", () => {
    test("Then it should return 'Gremlins' from the API", async () => {
      const newBall = ballsList[3];

      const response = await addBalls(newBall);

      expect(response).toStrictEqual(newBall);
    });
  });

  describe("When it is called with its addBallToApi function with 'Gremlins' and the response fail", () => {
    test("Then it should show the text 'Nerdmas Ball could not be added'", async () => {
      server.use(...errorHandlers);
      const path = "/add";
      const errorMessage = "Nerdmas Ball could not be added";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );

      await addBalls(ballAddMock[3]);
      const feedback = await screen.findByText(errorMessage);

      expect(feedback).toBeInTheDocument();
    });
  });
});
