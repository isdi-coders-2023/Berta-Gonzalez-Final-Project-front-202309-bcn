import { useState, useEffect, useCallback } from "react";
import {
  BallWithoutId,
  BallsStructure,
} from "../../store/features/balls/types";
import BallsButton from "../BallsButton/BallsButton";
import BallsFormStyled from "./BallsFormStyled";
import MainContainerStyled from "../../styles/shared/MainContainerStyled";

interface BallsFormProps {
  submitAction: (newBall: BallsStructure) => void;
  selectedBall?: BallsStructure;
  text: string;
}

const BallsForm = ({
  submitAction,
  selectedBall,
  text,
}: BallsFormProps): React.ReactElement => {
  const emptyBall: BallWithoutId = {
    ballName: "",
    isAvailable: false,
    collection: "",
    shop: "",
    yearRelease: 1900,
    price: 0,
    imageUrl: "",
    description: "",
    isTengui: false,
  };

  const initialState = selectedBall ?? emptyBall;

  const [newBall, setNewBall] = useState<BallWithoutId>(initialState);

  const onChangeData = useCallback(
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setNewBall(() => ({
        ...newBall,
        [event.target.id]:
          event.target.type !== "checkbox"
            ? (event.target as HTMLInputElement).value
            : (event.target as HTMLInputElement).checked,
      }));
    },
    [newBall],
  );

  useEffect(() => {
    const newBallValues = Object.values(newBall);

    newBallValues.every((value) => value !== "");
  });

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitAction(newBall as BallsStructure);
  };

  return (
    <MainContainerStyled>
      <BallsFormStyled
        className="form"
        onSubmit={onFormSubmit}
        autoComplete="off"
      >
        <label htmlFor="ballName" className="form__label">
          Ball Name
        </label>
        <input
          className="form__input"
          type="text"
          id="ballName"
          onChange={onChangeData}
          defaultValue={newBall.ballName}
          required
        />
        <label htmlFor="isAvailable" className="form__label">
          Is Available
        </label>
        <select className="form__input" id="isAvailable" required>
          <option value="options" className="form__input">
            Select
          </option>
          <option
            selected={newBall.isAvailable}
            value="yes"
            className="form__input"
          >
            Yes
          </option>
          <option
            selected={newBall.isAvailable}
            value="no"
            className="form__input"
          >
            No
          </option>
        </select>
        <label htmlFor="collection" className="form__label">
          Collection
        </label>
        <input
          className="form__input"
          type="text"
          id="collection"
          onChange={onChangeData}
          defaultValue={newBall.collection}
          required
        />
        <label htmlFor="shop" className="form__label">
          Shop
        </label>
        <input
          className="form__input"
          type="text"
          id="shop"
          onChange={onChangeData}
          defaultValue={newBall.shop}
          required
        />
        <label htmlFor="yearRelease" className="form__label">
          Year of Release
        </label>
        <input
          className="form__input"
          type="number"
          id="yearRelease"
          step={1}
          min={1900}
          max={2023}
          onChange={onChangeData}
          defaultValue={newBall.yearRelease}
          required
        />
        <label htmlFor="price" className="form__label">
          Price in €
        </label>
        <input
          className="form__input"
          type="number"
          id="price"
          step={0.01}
          min={0}
          onChange={onChangeData}
          defaultValue={newBall.price}
        />
        <label htmlFor="imageUrl" className="form__label">
          Image URL
        </label>
        <input
          className="form__input"
          type="url"
          id="imageUrl"
          onChange={onChangeData}
          defaultValue={newBall.imageUrl}
          required
        />
        <label htmlFor="description" className="form__label">
          Description
        </label>
        <textarea
          className="form__input form__input--textarea"
          id="description"
          onChange={onChangeData}
          defaultValue={newBall.description}
          required
        />
        <div className="form__label form__label--checkbox">
          <label htmlFor="isTengui" className="form__label">
            <span>Have</span>
          </label>
          <input
            className="form__checkbox form__label--check"
            type="checkbox"
            id="isTengui"
            checked={newBall.isTengui}
            onChange={onChangeData}
          />
        </div>
        <div className="form__button">
          <BallsButton text={text} type="submit" actionOnClick={undefined} />
        </div>
      </BallsFormStyled>
    </MainContainerStyled>
  );
};

export default BallsForm;
