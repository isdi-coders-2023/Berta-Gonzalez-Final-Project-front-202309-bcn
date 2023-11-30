import { useEffect } from "react";

import BallsHomePageStyled from "./BallsHomePageStyled";
import { loadBallsActionCreator } from "../../store/features/balls/ballsSlice";
import ballsMock from "../../mocks/ballsMock";
import { useAppDispatch } from "../../store/hooks";

const BallsHomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBallsActionCreator(ballsMock));
  }, [dispatch]);

  return (
    <BallsHomePageStyled>
      <h1 className="homepage-text">Mark your have and lack</h1>
    </BallsHomePageStyled>
  );
};

export default BallsHomePage;
