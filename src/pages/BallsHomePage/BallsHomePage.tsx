import { useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import BallsList from "../../components/BallsList/BallsList";
import useBallsApi from "../../hooks/useBallsApi";
import BallsHomePageStyled from "./BallsHomePageStyled";
import { loadBallsActionCreator } from "../../store/features/balls/ballsSlice";

const BallsHomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getBallsApi } = useBallsApi();

  useEffect(() => {
    (async () => {
      const balls = await getBallsApi();

      if (balls) {
        dispatch(loadBallsActionCreator(balls));
      }
    })();
  }, [dispatch, getBallsApi]);

  return (
    <BallsHomePageStyled>
      <h1 className="homepage-text">Mark your have and lack</h1>
      <BallsList />
    </BallsHomePageStyled>
  );
};

export default BallsHomePage;
