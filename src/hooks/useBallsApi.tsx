import axios from "axios";
import { useCallback } from "react";
import { BallsStructure } from "../store/features/balls/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";

const useBallsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const dispatch = useAppDispatch();

  const getBallsApi = useCallback(async () => {
    dispatch(showLoadingActionCreator());

    const { data: balls } = await axios.get<{
      balls: BallsStructure[];
    }>("/balls");

    dispatch(hideLoadingActionCreator());

    return balls;
  }, [dispatch]);

  return { getBallsApi };
};

export default useBallsApi;
