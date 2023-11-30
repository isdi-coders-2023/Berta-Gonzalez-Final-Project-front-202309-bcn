import { Navigate, Route, Routes } from "react-router-dom";
import BallsHeader from "../BallsHeader/BallsHeader";
import BallsNavMenu from "../BallsNavMenu/BallsNavMenu";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <>
      <BallsHeader />
      <BallsNavMenu />
      <AppStyled>
        <Routes>
          <Route path="/" element={<Navigate to="/balls" />} />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;
