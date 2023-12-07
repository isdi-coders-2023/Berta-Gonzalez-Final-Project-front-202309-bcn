import BallsButton from "../BallsButton/BallsButton";
import BallsFormStyled from "./BallsFormStyled";

const BallsForm = (): React.ReactElement => {
  return (
    <BallsFormStyled className="form" autoComplete="off">
      <label htmlFor="ball-name" className="form__label">
        Ball Name
      </label>
      <input className="form__input" type="text" id="ball-name" required />
      <label htmlFor="available" className="form__label">
        Is Available
      </label>
      <input className="form__input" type="text" id="available" required />
      <label htmlFor="collection" className="form__label">
        Collection
      </label>
      <input className="form__input" type="text" id="collection" required />
      <label htmlFor="shop" className="form__label">
        Shop
      </label>
      <input className="form__input" type="text" id="shop" required />
      <label htmlFor="year-release" className="form__label">
        Year of Release
      </label>
      <input className="form__input" type="number" id="year-release" required />
      <label htmlFor="price" className="form__label">
        Price in €
      </label>
      <input className="form__input" type="text" id="price" required />
      <label htmlFor="image-url" className="form__label">
        Image URL
      </label>
      <input className="form__input" type="url" id="image-url" required />
      <label htmlFor="available" className="form__label">
        Description
      </label>
      <textarea
        className="form__input form__input--textarea"
        id="description"
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
