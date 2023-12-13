import axios from "axios";
import { useCallback } from "react";
import { BallWithoutId, BallsStructure } from "../store/features/balls/types";
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
  modifyBall: (newBall: BallsStructure) => Promise<void>;
  loadSelectedBall: () => Promise<BallsStructure | void>;
}
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
const toastifyPosition = toast.POSITION.TOP_CENTER;

const useBallsApi = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getBallsApi = useCallback(async (): Promise<
    BallsStructure[] | undefined
  > => {
    dispatch(showLoadingActionCreator());

    try {
      const { data: balls } = await axios.get<{
        balls: BallsStructure[];
      }>("/balls");

      dispatch(hideLoadingActionCreator());

      return balls.balls;
    } catch {
      dispatch(hideLoadingActionCreator());

      toast.error("Nerdmas Balls could not be loaded", {
        position: toastifyPosition,
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
          position: toastifyPosition,
          className: "toast toast--success",
        });

        dispatch(hideLoadingActionCreator());

        return data;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.error("Nerdmas Ball could not be deleted", {
          position: toastifyPosition,
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
        }>("/balls/add", newBall);
        toast.success("Nerdmas Ball added successfully", {
          position: toastifyPosition,
          className: "toast toast--success",
        });

        dispatch(hideLoadingActionCreator());
        navigate("/balls");

        return ball;
      } catch (error) {
        dispatch(hideLoadingActionCreator());

        toast.error("Nerdmas Ball could not be added", {
          position: toastifyPosition,
          className: "toast toast--fail",
        });
      }
    },
    [dispatch, navigate],
  );

  const loadSelectedBall = useCallback(
    async (ballId: string): Promise<BallsStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { ball },
        } = await axios.get<{ ball: BallsStructure }>(`/balls/${ballId}`);

        dispatch(hideLoadingActionCreator());

        return ball;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
        toast.error("Fail to select this Nerdmas Ball info", {
          position: toastifyPosition,
          className: "toast toast--fail",
        });
      }
    },
    [dispatch],
  );

  const modifyBall = useCallback(
    async (ballId: string, modifiedBall: BallWithoutId) => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { ball },
        } = await axios.patch<{ ball: BallsStructure }>(
          `/balls/${ballId}`,
          modifiedBall,
        );

        dispatch(hideLoadingActionCreator());

        toast.success("Nerdmas Ball modified successfully", {
          position: toastifyPosition,
          className: "toast toast--success",
        });

        navigate("/balls");

        return ball;
      } catch {
        dispatch(hideLoadingActionCreator());

        toast.success("Nerdmas Ball could not be modified", {
          position: toastifyPosition,
          className: "toast toast--fail",
        });
      }
    },
    [dispatch, navigate],
  );

  const setToggleIsTengui = useCallback(
    async (ballId: string, isTengui: boolean): Promise<void> => {
      try {
        await axios.patch(`/balls`, {
          isTengui: !isTengui,
          _id: ballId,
        });

        toast.success("Nerdmas Ball change successfully", {
          position: toastifyPosition,
          className: "toast toast--success",
        });
      } catch {
        dispatch(hideLoadingActionCreator());
        toast.error("Nerdmas Ball could not be changed", {
          position: toastifyPosition,
          className: "toast toast--fail",
        });
      }
    },
    [dispatch],
  );

  return {
    getBallsApi,
    deleteBalls,
    setToggleIsTengui,
    addBalls,
    modifyBall,
    loadSelectedBall,
  };
};

export default useBallsApi;
