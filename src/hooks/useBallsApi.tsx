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
import { toast } from "react-toastify";

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

      toast.error("Nerdmas Balls could not be loaded", {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast toast--fail",
      });
    }
  }, [dispatch]);

  const deleteBalls = useCallback(
    async (id: string): Promise<void> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.delete(`/balls/${id}`);
        toast.success("Nerdmas Ball deleted successfully", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast toast--success",
        });

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Nerdmas Ball could not be deleted", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast toast--fail",
        });
      }
    },
    [dispatch],
  );

  const setToggleIsTengui = useCallback(
    async (ballId: string, isTengui: boolean): Promise<void> => {
      dispatch(showLoadingActionCreator());

      try {
        await axios.patch(`/balls`, {
          isTengui: !isTengui,
          _id: ballId,
        });

        dispatch(hideLoadingActionCreator());
        toast.success("Nerdmas Ball change successfully", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast toast--success",
        });
      } catch {
        dispatch(hideLoadingActionCreator());
        toast.error("Nerdmas Ball could not be changed", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast toast--fail",
        });
      }
    },
    [dispatch],
  );

  return { getBallsApi, deleteBalls, setToggleIsTengui };
};

export default useBallsApi;
