import { NavLink } from "react-router-dom";
import BallsNavMenuStyled from "./BallsNavMenuStyled";

const BallsNavMenu = (): React.ReactElement => {
  return (
    <BallsNavMenuStyled>
      <li>
        <NavLink aria-label="home" to="/balls">
          <span className="navigation__text">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink aria-label="add-form" to="/add">
          <span className="navigation__text">Add</span>
        </NavLink>
      </li>
    </BallsNavMenuStyled>
  );
};

export default BallsNavMenu;
