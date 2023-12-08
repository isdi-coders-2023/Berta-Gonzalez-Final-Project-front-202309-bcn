import { useState } from "react";
import { BallWithoutId } from "../../store/features/balls/types";
import BallsButton from "../BallsButton/BallsButton";
import BallsFormStyled from "./BallsFormStyled";

const BallsForm = (): React.ReactElement => {
  const emptyBall: BallWithoutId = {
    ballName: "",
    isAvailable: false,
    collection: "",
    shop: "",
    yearRelease: 0,
    price: 0,
    imageUrl: "",
    description: "",
    isTengui: false,
  };

  const [newBall, setNewBall] = useState<BallWithoutId>(emptyBall);

  const onChangeData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewBall({
      ...newBall,
      [event.target.id]:
        event.target.type !== "checkbox"
          ? (event.target as HTMLInputElement).value
          : (event.target as HTMLInputElement).checked,
    });
  };

  return (
    <BallsFormStyled className="form" autoComplete="off">
      <label htmlFor="ball-name" className="form__label">
        Ball Name
      </label>
      <input
        className="form__input"
        type="text"
        id="ball-name"
        onChange={onChangeData}
        required
      />
      <label htmlFor="available" className="form__label">
        Is Available
      </label>
      <input
        className="form__input"
        type="text"
        id="available"
        onChange={onChangeData}
        required
      />
      <label htmlFor="collection" className="form__label">
        Collection
      </label>
      <input
        className="form__input"
        type="text"
        id="collection"
        onChange={onChangeData}
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
        required
      />
      <label htmlFor="year-release" className="form__label">
        Year of Release
      </label>
      <input
        className="form__input"
        type="number"
        id="year-release"
        min={0}
        onChange={onChangeData}
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
        required
      />
      <label htmlFor="image-url" className="form__label">
        Image URL
      </label>
      <input
        className="form__input"
        type="url"
        id="image-url"
        onChange={onChangeData}
        required
      />
      <label htmlFor="description" className="form__label">
        Description
      </label>
      <textarea
        className="form__input form__input--textarea"
        id="description"
        onChange={onChangeData}
        required
      />
      <div className="form__label form__label--checkbox">
        <label htmlFor="checkbox" className="form__label">
          <span>Have</span>
        </label>
        <input
          className="form__checkbox form__label--check"
          type="checkbox"
          id="checkbox"
          onChange={onChangeData}
          required
        />
      </div>
      <div className="form__button">
        <BallsButton
          text="Create"
          type="submit"
          className="form__button--box"
          actionOnClick={undefined}
        />
      </div>
    </BallsFormStyled>
  );
};

export default BallsForm;
