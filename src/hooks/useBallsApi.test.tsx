import { renderHook } from "@testing-library/react";
import useBallsApi from "./useBallsApi";
import { providerWrapper } from "../testUtils/customRender";
import { ballAddMock, ballsMock } from "../mocks/ballsMock";

describe("Given a useBallsApi custom hook", () => {
  describe("When it receives information of 'Harry Potter crew', 'My neighbour Totoro' and 'Mario Bros'", () => {
    test("Then it should show 'Harry Potter crew', 'My neighbour Totoro' and 'Mario Bros' full information", async () => {
      const expectedBalls = ballsMock;

      const {
        result: {
          current: { getBallsApi },
        },
      } = renderHook(() => useBallsApi(), { wrapper: providerWrapper });

      const currentBalls = await getBallsApi();

      expect(currentBalls).toStrictEqual(expectedBalls);
    });
  });

  describe("When it calls its deleteBall method with an URL and 'Harry Potter crew' id", () => {
    test("Then it should delete 'Harry Potter crew' ball from Api rest", async () => {
      const expectedBallId = ballsMock[0]._id;
      const expectedEmptyObject = {};

      const {
        result: {
          current: { deleteBalls },
        },
      } = renderHook(() => useBallsApi(), { wrapper: providerWrapper });

      const response = await deleteBalls(expectedBallId);

      expect(response).toStrictEqual(expectedEmptyObject);
    });
  });

  describe("When it calls its addBalls method with a 'Never ending story' ball", () => {
    const newBall = ballAddMock;

    test("Then it should receive the 'Never ending story' ball from the API rest", async () => {
      const {
        result: {
          current: { addBalls },
        },
      } = renderHook(() => useBallsApi(), { wrapper: providerWrapper });

      const response = await addBalls(newBall[3]);

      expect(response).toStrictEqual(newBall);
    });
  });
});
