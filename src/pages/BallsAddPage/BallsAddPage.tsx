import BallsForm from "../../components/BallsForm/BallsForm";
import useBallsApi from "../../hooks/useBallsApi";
import BallsAddPageStyled from "./BallsAddPageStyled";

const BallsAddPage = (): React.ReactElement => {
  const { addBalls } = useBallsApi();

  return (
    <BallsAddPageStyled>
      <h1 className="addpage-text">Add a new Nerdmas Ball</h1>
      <BallsForm submitAction={addBalls} text="Create" />
    </BallsAddPageStyled>
  );
};

export default BallsAddPage;
