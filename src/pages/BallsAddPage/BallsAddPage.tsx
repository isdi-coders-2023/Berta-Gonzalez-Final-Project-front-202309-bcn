import BallsForm from "../../components/BallsForm/BallsForm";
import useBallsApi from "../../hooks/useBallsApi";
import { BallsStructure } from "../../store/features/balls/types";
import BallsAddPageStyled from "./BallsAddPageStyled";

const BallsAddPage = (): React.ReactElement => {
  const { addBalls } = useBallsApi();

  const addCurrentBall = (newBall: BallsStructure) => {
    addBalls(newBall);
  };

  return (
    <BallsAddPageStyled>
      <h1 className="addpage-text">Add a new Nerdmas Ball</h1>
      <BallsForm submitAction={addCurrentBall} />
    </BallsAddPageStyled>
  );
};

export default BallsAddPage;
