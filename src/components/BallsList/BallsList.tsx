import { useAppSelector } from "../../store/hooks";
import BallsCard from "../BallsCard/BallsCard";
import BallsListStyled from "./BallsListStyled";

const BallsList = (): React.ReactElement => {
  const balls = useAppSelector((state) => state.ballsState.balls);

  return (
    <BallsListStyled className="cards">
      {balls.map((ball) => (
        <li className="cards__list" key={ball._id}>
          <BallsCard ball={ball} />
        </li>
      ))}
    </BallsListStyled>
  );
};

export default BallsList;
