import { ballAddMock, ballsMock } from "../../../mocks/ballsMock";
import { BallsStateStructure, BallsStructure } from "./types";
import {
  addBallActionCreator,
  ballsReducer,
  deleteBallsActionCreator,
  loadBallsActionCreator,
  toggleHaveBallsActionCreator,
} from "./ballsSlice";

describe("Given a loadBalls minireducer", () => {
  describe("When it receives a list with 'Harry Potter crew' and 'My neighbor Totoro' balls", () => {
    test("Then it should return a list with 'Harry Potter crew' and 'My neighbor Totoro' balls", () => {
      const ballsList = ballsMock;
      const currentBallsState: BallsStateStructure = {
        balls: [],
      };

      const newBallsState = ballsReducer(
        currentBallsState,
        loadBallsActionCreator(ballsList),
      );

      expect(newBallsState.balls).toStrictEqual(ballsList);
    });
  });
});

describe("Given a deleteBalls minireducer", () => {
  describe("When it receives a list of three balls, an existing ball id an the deleteBall method", () => {
    test("Then it should return the list of two balls without the deleted ball 'Harry Potter crew'", () => {
      const initialState: BallsStateStructure = {
        balls: ballsMock,
      };
      const expectedDeletedBalls = "Harry Potter crew";
      const expectedBallId = "656241b0c4ddfcae991f0b13";

      const currentBallState = ballsReducer(
        initialState,
        deleteBallsActionCreator(expectedBallId),
      );

      currentBallState.balls.forEach((ball) => {
        expect(ball).not.toHaveProperty("name", expectedDeletedBalls);
      });
    });
  });
});

describe("Given a addBalls minireducer", () => {
  describe("When it receives a balls list, and a 'Never ending story' ball and the action addBall", () => {
    test("Then it should return the balls full list with 'Never ending story' ball added", () => {
      const mockData = ballsMock;
      const newBallmock = ballAddMock;
      const initialState: BallsStateStructure = { balls: mockData };
      const newBall: BallsStructure = ballAddMock[3];

      const currentBallState = ballsReducer(
        initialState,
        addBallActionCreator(newBall),
      );

      expect(currentBallState.balls).toStrictEqual(newBallmock);
    });
  });
});

describe("Given a toggleBalls minireducer", () => {
  describe("When it receives a 'Harry Potter crew' ball with Have state in true", () => {
    test("Then it should show a 'Harry Potter crew' ball with Have state in false", async () => {
      const initialState: BallsStateStructure = {
        balls: ballsMock,
      };
      const expectedId = "656241b0c4ddfcae991f0b13";

      expect(ballsMock[0].isTengui).toBeTruthy();

      const currentBallState = ballsReducer(
        initialState,
        toggleHaveBallsActionCreator(expectedId),
      );

      expect(currentBallState.balls[0].isTengui).toBeFalsy();
    });
  });
});
