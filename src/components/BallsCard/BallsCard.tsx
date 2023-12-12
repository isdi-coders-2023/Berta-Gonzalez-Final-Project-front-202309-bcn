import {
  deleteBallsActionCreator,
  loadSelectedBallActionCreator,
  loadBallsActionCreator,
  toggleHaveBallsActionCreator,
} from "../../store/features/balls/ballsSlice";
import { BallsStructure } from "../../store/features/balls/types";
import BallsButton from "../BallsButton/BallsButton";
import BallsCardStyled from "./BallsCardStyled";
import useBallsApi from "../../hooks/useBallsApi";
import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import MainContainerStyled from "../../styles/shared/MainContainerStyled";

interface BallsProps {
  ball: BallsStructure;
}

const BallsCard = ({
  ball: { ballName, _id, isTengui, imageUrl, isAvailable, collection, shop },
}: BallsProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { loadSelectedBall, deleteBalls, getBallsApi, setToggleIsTengui } =
    useBallsApi();

  const navigate = useNavigate();

  const deleteBallsApi = async (): Promise<void> => {
    await deleteBalls(_id);
    dispatch(deleteBallsActionCreator(_id));

    const balls = await getBallsApi();

    if (balls) {
      dispatch(loadBallsActionCreator(balls.balls));
    }
  };

  const getBallsByIdApi = () => {
    navigate(`/balls/${_id}`);
  };

  const modifyBallApi = async (): Promise<void> => {
    const selectedBall = await loadSelectedBall(_id);

    if (selectedBall) {
      dispatch(loadSelectedBallActionCreator(selectedBall));
    }

    navigate(`/balls/${_id}/modify`);
  };

  const handlerToggleIsTengui = useCallback(async () => {
    await setToggleIsTengui(_id, isTengui);

    dispatch(toggleHaveBallsActionCreator(_id));
  }, [dispatch, _id, isTengui, setToggleIsTengui]);

  return (
    <MainContainerStyled>
      <BallsCardStyled className="card">
        <img
          className="card__image"
          src={imageUrl}
          alt={ballName}
          width="257"
          height="257"
        />
        <h2 className="card__ball-name">{ballName}</h2>
        <ul className="card__list-container">
          <li className="card__item card__item--label">
            <label className="card__label" htmlFor="checkbox">
              <span>Have:</span>
              <input
                className="card__checkbox"
                title="it's have or not checkbox"
                type="checkbox"
                id="checkbox"
                checked={isTengui}
                onChange={handlerToggleIsTengui}
              />
            </label>
          </li>
          <li className="card__item">
            <span>Available:</span>
            <span>{isAvailable ? "Yes" : "No"}</span>
          </li>
          <li className="card__item">
            <span>Collection:</span>
            <span className="card__item--collection">{collection}</span>
          </li>
          <li className="card__item">
            <span>Shop:</span>
            <span className="card__item--shop">{shop}</span>
          </li>
        </ul>
        <div className="buttons">
          <BallsButton
            text="Info"
            type="button"
            actionOnClick={getBallsByIdApi}
          />
          <BallsButton
            text="Modify"
            type="button"
            actionOnClick={modifyBallApi}
          />
          <BallsButton
            text="Delete"
            type="button"
            actionOnClick={deleteBallsApi}
          />
        </div>
      </BallsCardStyled>
    </MainContainerStyled>
  );
};

export default BallsCard;
