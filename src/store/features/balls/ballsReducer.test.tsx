import ballsMock from "../../../mocks/ballsMock";
import { BallsStateStructure } from "./types";
import {
  ballsReducer,
  deleteBallsActionCreator,
  loadBallsActionCreator,
  toggleHaveBallsActionCreator,
} from "./ballsSlice";

describe("Given a ballsReducer", () => {
  describe("When it receives an empty list of balls", () => {
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

  describe("When it receives a 'Harry Potter crew' ball with Have state in true", () => {
    test("Then it should show a 'Harry Potter crew' ball with Have state in false", () => {
      const initialState: BallsStateStructure = {
        balls: ballsMock,
      };
      const expectedBallId = "656241b0c4ddfcae991f0b13";
      const expectedIsTenguiState = false;

      const currentBallState = ballsReducer(
        initialState,
        toggleHaveBallsActionCreator(expectedBallId),
      );

      currentBallState.balls.forEach((ball) => {
        expect(ball.isTengui).toBe(expectedIsTenguiState);
      });
    });
  });
});
