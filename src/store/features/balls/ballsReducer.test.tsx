import ballsMock from "../../../mocks/ballsMock";
import { BallsStateStructure } from "./types";
import { ballsReducer, loadBallsActionCreator } from "./ballsSlice";

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
});
