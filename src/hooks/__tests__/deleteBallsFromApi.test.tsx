import { renderHook } from "@testing-library/react";
import { ballsMock } from "../../mocks/ballsMock";
import useBallsApi from "../useBallsApi";
import { providerWrapper } from "../../testUtils/customWrapper";

describe("Given a useBallsApi custom hook", () => {
  describe("When it calls its deletedBall function with a ballId", () => {
    test("Then it should delete 'Harry Potter crew'", async () => {
      const ballsList = ballsMock;

      const {
        result: {
          current: { deleteBalls },
        },
      } = renderHook(() => useBallsApi(), { wrapper: providerWrapper });

      const expectedBallId = ballsList[0]._id;
      const expectedResponse = {};

      const response = await deleteBalls(expectedBallId);

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
