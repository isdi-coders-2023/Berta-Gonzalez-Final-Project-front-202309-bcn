import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteBallsActionCreator,
  loadBallsActionCreator,
  loadSelectedBallActionCreator,
} from "../../store/features/balls/ballsSlice";
import useBallsApi from "../../hooks/useBallsApi";
import BallsButton from "../../components/BallsButton/BallsButton";
import { useNavigate, useParams } from "react-router-dom";
import BallDetailPageStyled from "./BallDetailPageStyled";
import MainContainerStyled from "../../styles/shared/MainContainerStyled";
import { BallsStructure } from "../../store/features/balls/types";

const BallDetailPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { ballId } = useParams();
  const { deleteBalls, setToggleIsTengui, getBallsApi, loadSelectedBall } =
    useBallsApi();
  const ball = useAppSelector((state) => state.ballsState.selectedBall);
  const navigate = useNavigate();
  const [isTengui, setIsTengui] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (ballId) {
        const selectedBall = await loadSelectedBall(ballId as string);
        dispatch(loadSelectedBallActionCreator(selectedBall as BallsStructure));
        setIsTengui(ball.isTengui);
      }
    })();
  }, [dispatch, ballId, loadSelectedBall, ball.isTengui]);

  const deleteBallsApi = async (): Promise<void> => {
    await deleteBalls(ballId!);
    dispatch(deleteBallsActionCreator(ballId!));

    const balls = await getBallsApi();

    if (balls) {
      dispatch(loadBallsActionCreator(balls.balls));

      navigate(`/balls`);
    }
  };

  const handlerToggleIsTengui = useCallback(async () => {
    await setToggleIsTengui(ball._id, ball.isTengui);

    dispatch(
      loadSelectedBallActionCreator({ ...ball, isTengui: !ball.isTengui }),
    );
    setIsTengui(!isTengui);
  }, [setToggleIsTengui, ball, dispatch, isTengui]);

  return (
    <BallDetailPageStyled className="detail">
      <div className="detail__container">
        <h1 className="detail__title">See all the details</h1>
        <img
          className="detail__image"
          src={ball.imageUrl}
          alt={ball.ballName}
          width="400"
          height="400"
        />
        <MainContainerStyled className="detail__info">
          <h2 className="detail__ball-name">{ball.ballName}</h2>
          <ul className="detail__list-container">
            <li className="detail__list">
              <label className="detail__label" htmlFor="checkbox">
                <span>Have:</span>
                <input
                  className="detail__checkbox"
                  title="it's have or not checkbox"
                  type="checkbox"
                  id="checkbox"
                  checked={isTengui}
                  onChange={handlerToggleIsTengui}
                />
              </label>
            </li>
            <li className="detail__list">
              <span>Available:</span>
              <span>{ball.isAvailable ? "Yes" : "No"}</span>
            </li>
            <li className="detail__list">
              <span>Collection:</span>
              <span className="detail__list--text">{ball.collection}</span>
            </li>
            <li className="detail__list">
              <span>Shop:</span>
              <span className="detail__list--text">{ball.shop}</span>
            </li>
            <li className="detail__list">
              <span>Year of release:</span>
              <span>{ball.yearRelease}</span>
            </li>
            <li className="detail__list">
              <span>Price:</span>
              <span>{ball.price}€</span>
            </li>
            <li className="detail__list--description">
              <span>Description:</span>
              <span className="detail__list--description-text">
                {ball.description}
              </span>
            </li>
          </ul>
        </MainContainerStyled>
      </div>
      <div className="button-container">
        <BallsButton text="Modify" type="button" actionOnClick={undefined} />
        <BallsButton
          text="Delete"
          type="button"
          actionOnClick={deleteBallsApi}
        />
      </div>
    </BallDetailPageStyled>
  );
};

export default BallDetailPage;
