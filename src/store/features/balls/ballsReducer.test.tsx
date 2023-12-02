import ballsMock from "../../../mocks/ballsMock";
import { BallsStateStructure, BallsStructure } from "../types";
import {
  ballsReducer,
  loadBallsActionCreator,
  toggleIsCheckedActionCreator,
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
  describe("When it receives the action to mark a ball as have", () => {
    test("Then it should update the list with that ball mark as have", () => {
      const expectedModifiedHaveState: { balls: BallsStructure[] } = {
        balls: ballsMock,
      };

      const previousStat: { balls: BallsStructure[] } = {
        balls: ballsMock,
      };

      const modifiedHaveBalls = ballsReducer(
        previousStat,
        toggleIsCheckedActionCreator("2"),
      );

      expect(modifiedHaveBalls).toEqual(expectedModifiedHaveState);
    });
  });
});
