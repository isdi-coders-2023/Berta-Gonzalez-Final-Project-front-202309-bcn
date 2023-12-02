import axios from "axios";
import { useCallback } from "react";
import { BallsStructure } from "../store/features/types";

const useBallsApi = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;

  const getBallsApi = useCallback(async () => {
    const { data: balls } = await axios.get<{
      balls: BallsStructure[];
    }>("/balls");

    return balls;
  }, []);

  return { getBallsApi };
};

export default useBallsApi;
