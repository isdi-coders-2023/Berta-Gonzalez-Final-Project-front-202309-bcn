import { useNavigate } from "react-router-dom";
import BallsForm from "../../components/BallsForm/BallsForm";
import useBallsApi from "../../hooks/useBallsApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ModifyBallPageStyled from "./ModifyBallPageStyled";
import { BallWithoutId } from "../../store/features/balls/types";
import { modifyBallActionCreator } from "../../store/features/balls/ballsSlice";

const ModifyBallPage = (): React.ReactElement => {
  const { modifyBall } = useBallsApi();
  const { selectedBall } = useAppSelector((state) => state.ballsState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
