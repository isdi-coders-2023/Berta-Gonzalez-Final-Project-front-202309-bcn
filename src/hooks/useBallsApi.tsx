import axios from "axios";
import { useCallback } from "react";
import {
  BallWithoutId,
  BallsStateStructure,
  BallsStructure,
} from "../store/features/balls/types";
import { useAppDispatch } from "../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../store/features/ui/uiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export interface UseBallsApiStructure {
  getBalls: () => Promise<BallsStructure | void>;
  deleteBalls: (id: string) => Promise<Record<string, never> | void>;
  setToggleIsTengui: () => Promise<void>;
  addBalls: (
    ball: BallWithoutId,
  ) => Promise<{ ball: BallsStructure } | undefined>;
}
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const useBallsApi = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    async (id: string): Promise<Record<string, never> | void> => {
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

  const addBalls = useCallback(
    async (newBall: BallWithoutId): Promise<BallsStructure | void> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { ball },
        } = await axios.post<{
          ball: BallsStructure;
        }>(`/balls/add`, newBall);
        toast.success("Nerdmas Ball added successfully", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast toast--success",
        });

        dispatch(hideLoadingActionCreator());
        navigate("/balls");

        return ball;
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error("Nerdmas Ball could not be added", {
          position: toast.POSITION.TOP_RIGHT,
          className: "toast toast--fail",
        });
      }
    },
    [dispatch, navigate],
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

  return { getBallsApi, deleteBalls, setToggleIsTengui, addBalls };
};

export default useBallsApi;
