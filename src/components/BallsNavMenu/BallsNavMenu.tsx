import { NavLink } from "react-router-dom";
import BallsNavMenuStyled from "./BallsNavMenuStyled";

const BallsNavMenu = (): React.ReactElement => {
  return (
    <BallsNavMenuStyled>
      <ul className="navigation">
        <li className="navigation__text">
          <NavLink aria-label="home" to="/balls">
            <span>Home</span>
          </NavLink>
        </li>
        <li className="navigation__text">
          <NavLink aria-label="add-form" to="/add">
            <span>Add</span>
          </NavLink>
        </li>
      </ul>
    </BallsNavMenuStyled>
  );
};

export default BallsNavMenu;
