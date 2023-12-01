import { BallsStructure } from "../../store/features/types";
import BallsCardStyled from "./BallsCardStyled";

interface BallsProps {
  ball: BallsStructure;
}

const BallsCard = ({ ball }: BallsProps): React.ReactElement => {
  const isAvailable = () => {
    if (ball.isAvailable) {
      return "Yes";
    }

    return "No";
  };

  return (
    <BallsCardStyled className="card">
      <img
        className="card__image"
        src={ball.imageUrl}
        alt={ball.ballName}
        width="257"
        height="257"
      />
      <h2 className="card__ball-name">{ball.ballName}</h2>
      <ul className="card__list-container">
        <li className="card__item">
          <span>Have:</span>
        </li>
        <li className="card__item">
          <span>Available:</span>
          <span>{isAvailable()}</span>
        </li>
        <li className="card__item">
          <span>Collection:</span>
          <span>{ball.collection}</span>
        </li>
        <li className="card__item">
          <span>Shop:</span>
          <span>{ball.shop}</span>
        </li>
      </ul>
    </BallsCardStyled>
  );
};

export default BallsCard;
