import { renderHook } from "@testing-library/react";
import ballsMock from "../mocks/ballsMock";
import useBallsApi from "./useBallsApi";
import { providerWrapper } from "../testUtils/customRender";

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
});
