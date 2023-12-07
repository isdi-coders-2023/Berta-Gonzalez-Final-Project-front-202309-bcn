import BallsForm from "../../components/BallsForm/BallsForm";

import BallsAddPageStyled from "./BallsAddPageStyled";

const BallsAddPage = (): React.ReactElement => {
  return (
    <BallsAddPageStyled>
      <h1 className="addpage-text">Add a new Nerdmas Ball</h1>
      <BallsForm />
    </BallsAddPageStyled>
  );
};

export default BallsAddPage;
