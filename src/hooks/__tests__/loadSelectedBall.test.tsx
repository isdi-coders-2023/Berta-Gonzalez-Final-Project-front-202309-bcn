import { renderHook, screen } from "@testing-library/react";
import { ballAddMock, ballsMock, gremlinsMock } from "../../mocks/ballsMock";
import useBallsApi from "../useBallsApi";
import { providerWrapper } from "../../testUtils/customWrapper";
import server from "../../mocks/node";
import { errorHandlers } from "../../mocks/handlers";
import { customRenderWithoutRouter } from "../../testUtils/customRender";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App/App";
import {
  BallsStateStructure,
  BallsStructure,
} from "../../store/features/balls/types";
import {
  ballsReducer,
  loadSelectedBallActionCreator,
} from "../../store/features/balls/ballsSlice";

describe("Given a useBallsApi custom hook", () => {
  const expectedBall = ballsMock[3];

  const {
    result: {
      current: { loadSelectedBall },
    },
  } = renderHook(() => useBallsApi(), { wrapper: providerWrapper });

  describe("When it calls its loadSelectedBall method with 'Gremlins'", () => {
    test("Then it should return 'Gremlins' from the API", async () => {
      const ballId = "65624190453433ror943";

      const response = await loadSelectedBall(ballId);

      expect(response).toStrictEqual(expectedBall);
    });
  });

  describe("When it is called with its loadSelectedBall method with '65624190453433ror943error'", () => {
    test("Then it should return 'Gremlins' form de API", async () => {
      server.use(...errorHandlers);

      const ballId = gremlinsMock._id;
      const feedbackMessage = "Fail to select this Nerdmas Ball info";

      customRenderWithoutRouter(
        <MemoryRouter initialEntries={["balls/65624190453433ror943"]}>
          <App />
        </MemoryRouter>,
      );

      await loadSelectedBall(ballId);
      const feedback = await screen.findByText(feedbackMessage);

      expect(feedback).toBeInTheDocument();
    });
  });

  describe("When it receives a list of balls, and a 'Harry Potter crew' ball action loadSelectedBall", () => {
    test("Then it should return the list of balls with the 'Harry Potter crew' ball", () => {
      const initialState: BallsStateStructure = {
        balls: ballAddMock,
        selectedBall: {} as BallsStructure,
      };
      const selectedBall: BallsStructure = ballAddMock[2];

      const currentBallState = ballsReducer(
        initialState,
        loadSelectedBallActionCreator(selectedBall),
      );

      expect(currentBallState.selectedBall).toStrictEqual(selectedBall);
    });
  });
});
