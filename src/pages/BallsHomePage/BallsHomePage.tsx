import BallsHomePageStyled from "./BallsHomePageStyled";
import { loadBallsActionCreator } from "../../store/features/balls/ballsSlice";
import ballsMock from "../../mocks/ballsMock";
import { useAppDispatch } from "../../store/hooks";
import BallsList from "../../components/BallsList/BallsList";

const BallsHomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  dispatch(loadBallsActionCreator(ballsMock));
  return (
    <BallsHomePageStyled>
      <h1 className="homepage-text">Mark your have and lack</h1>
      <BallsList />
    </BallsHomePageStyled>
  );
};

export default BallsHomePage;
