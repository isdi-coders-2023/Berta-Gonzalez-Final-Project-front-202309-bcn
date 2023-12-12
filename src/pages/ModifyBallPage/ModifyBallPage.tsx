import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import BallsForm from "../../components/BallsForm/BallsForm";
import useBallsApi from "../../hooks/useBallsApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ModifyBallPageStyled from "./ModifyBallPageStyled";
import {
  BallWithoutId,
  BallsStructure,
} from "../../store/features/balls/types";
import {
  loadSelectedBallActionCreator,
  modifyBallActionCreator,
} from "../../store/features/balls/ballsSlice";

const ModifyBallPage = (): React.ReactElement => {
  const { ballId } = useParams();
  const { modifyBall, loadSelectedBall } = useBallsApi();
  const { selectedBall } = useAppSelector((state) => state.ballsState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const selectedBall = await loadSelectedBall(ballId as string);

      dispatch(loadSelectedBallActionCreator(selectedBall as BallsStructure));
    })();
  }, [ballId, dispatch, loadSelectedBall]);

  const updateBall = async (ball: BallWithoutId) => {
    const updateBall = await modifyBall(selectedBall._id, ball);

    dispatch(modifyBallActionCreator(updateBall!));
    navigate("/balls");
  };

  return (
    <ModifyBallPageStyled>
      <h1 className="modify-text">Modify the ball</h1>
      <BallsForm
        submitAction={updateBall}
        selectedBall={selectedBall}
        text="Modify"
      />
    </ModifyBallPageStyled>
  );
};

export default ModifyBallPage;
