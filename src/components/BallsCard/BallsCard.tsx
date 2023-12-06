import {
  deleteBallsActionCreator,
  loadBallsActionCreator,
  toggleHaveBallsActionCreator,
} from "../../store/features/balls/ballsSlice";
import { BallsStructure } from "../../store/features/balls/types";
import BallsButton from "../BallsButton/BallsButton";
import BallsCardStyled from "./BallsCardStyled";
import useBallsApi from "../../hooks/useBallsApi";
import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";

interface BallsProps {
  ball: BallsStructure;
}

const BallsCard = ({
  ball: { ballName, _id, isTengui, imageUrl, isAvailable, collection, shop },
}: BallsProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteBalls, getBallsApi, setToggleIsTengui } = useBallsApi();

  const deleteBallsApi = async (): Promise<void> => {
    await deleteBalls(_id);
    dispatch(deleteBallsActionCreator(_id));

    const balls = await getBallsApi();

    if (balls) {
      dispatch(loadBallsActionCreator(balls.balls));
    }
  };

  const handlerToggleIsTengui = useCallback(async () => {
    await setToggleIsTengui(_id, isTengui);

    dispatch(toggleHaveBallsActionCreator(_id));
  }, [dispatch, _id, isTengui, setToggleIsTengui]);

  return (
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
          <label className="card__label">
            <span>Have:</span>
            <input
              className="card__checkbox"
              title="it's have or not checkbox"
              type="checkbox"
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
          <span>{shop}</span>
        </li>
      </ul>
      <div className="buttons">
        <BallsButton
          text="Info"
          type="button"
          classModifier=""
          actionOnClick={undefined}
        />
        <BallsButton
          text="Modify"
          type="button"
          classModifier=""
          actionOnClick={undefined}
        />
        <BallsButton
          text="Delete"
          type="button"
          classModifier=""
          actionOnClick={deleteBallsApi}
        />
      </div>
    </BallsCardStyled>
  );
};

export default BallsCard;
