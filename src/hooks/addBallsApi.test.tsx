import { renderHook } from "@testing-library/react";
import newAddBallsMock from "../mocks/newAddBallsMock";
import useBallsApi from "./useBallsApi";
import { providerWrapper } from "../testUtils/customRender";

describe("Given a useBallsApi custom hook", () => {
  const newBall = newAddBallsMock;

  describe("When it calls its addBalls method with a 'Never ending story' ball", () => {
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
