import axios from "axios";
import { useCallback } from "react";
import {
  BallsStateStructure,
  BallsStructure,
} from "../store/features/balls/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const useBallsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getBallsApi = useCallback(async (): Promise<
    BallsStateStructure | undefined
  > => {
    dispatch(showLoadingActionCreator());

    try {
      const { data: balls } = await axios.get<{
        balls: BallsStructure[];
      }>("/balls");

      dispatch(hideLoadingActionCreator());

      return balls;
    } catch {
      dispatch(hideLoadingActionCreator());
    }
  }, [dispatch]);

  const deleteBalls = useCallback(
    async (id: string): Promise<void> => {
      dispatch(showLoadingActionCreator());

      const { data } = await axios.delete(`/balls/${id}`);

      dispatch(hideLoadingActionCreator());

      return data;
    },
    [dispatch],
  );

  const setHaveStatus = useCallback(
    async (ballId: string, isTengui: boolean): Promise<void> => {
      dispatch(showLoadingActionCreator());

      axios
        .patch(`/balls`, {
          isTengui: !isTengui,
          _id: ballId,
        })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          throw new Error(error);
        });

      dispatch(hideLoadingActionCreator());
    },
    [dispatch],
  );

  return { getBallsApi, deleteBalls, setHaveStatus };
};

export default useBallsApi;
