import {
  ballAddMock,
  ballsMock,
  ballsModifyMock,
} from "../../../mocks/ballsMock";
import { BallsStateStructure, BallsStructure } from "./types";
import {
  addBallActionCreator,
  ballsReducer,
  deleteBallsActionCreator,
  loadSelectedBallActionCreator,
  loadBallsActionCreator,
  toggleHaveBallsActionCreator,
  modifyBallActionCreator,
} from "./ballsSlice";

describe("Given a loadBalls minireducer", () => {
  describe("When it receives a list with 'Harry Potter crew' and 'My neighbor Totoro' balls", () => {
    test("Then it should return a list with 'Harry Potter crew' and 'My neighbor Totoro' balls", () => {
      const mockData = ballsMock;
      const initialState: BallsStateStructure = {
        balls: mockData,
        selectedBall: {} as BallsStructure,
      };

      const newBallsState = ballsReducer(
        initialState,
        loadBallsActionCreator(mockData),
      );

      expect(newBallsState.balls).toStrictEqual(mockData);
    });
  });
});

describe("Given a deleteBalls minireducer", () => {
  describe("When it receives a list of three balls, an existing ball id an the deleteBall method", () => {
    test("Then it should return the list of two balls without the deleted ball 'Harry Potter crew'", () => {
      const mockData = ballsMock;
      const initialState: BallsStateStructure = {
        balls: mockData,
        selectedBall: {} as BallsStructure,
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
      const initialState: BallsStateStructure = {
        balls: mockData,
        selectedBall: {} as BallsStructure,
      };
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
  const mockData = ballsMock;

  describe("When it receives a 'Harry Potter crew' ball with Have state in true", () => {
    test("Then it should show a 'Harry Potter crew' ball with Have state in false", async () => {
      const initialState: BallsStateStructure = {
        balls: mockData,
        selectedBall: {} as BallsStructure,
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

  describe("When it receives a balls list and the actions getBallById", () => {
    test("Then it should return the 'Harry Potter crew' ball selected", () => {
      const initialState: BallsStateStructure = {
        balls: mockData,
        selectedBall: {} as BallsStructure,
      };
      const selectedBall: BallsStructure = mockData[0];

      const currentBallState = ballsReducer(
        initialState,
        loadSelectedBallActionCreator(selectedBall),
      );

      expect(currentBallState.selectedBall).toStrictEqual(selectedBall);
    });
  });

  describe("When it receives a balls list, and 'Harry Potter crew' ball and the action modifyBall", () => {
    test("Then it should return the list of balls with the 'Harry Potter crew' ball modified", () => {
      const modifiedBall = {
        ...ballsModifyMock[0],
        ballName: "Harry Potter crew",
      };

      const initialState: BallsStateStructure = {
        balls: ballsModifyMock,
        selectedBall: {} as BallsStructure,
      };

      const currentBallState = ballsReducer(
        initialState,
        modifyBallActionCreator(modifiedBall),
      );

      expect(currentBallState.balls).toStrictEqual(ballsModifyMock);
    });
  });
});
