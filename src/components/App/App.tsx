import { Navigate, Route, Routes } from "react-router-dom";
import BallsHeader from "../BallsHeader/BallsHeader";
import BallsNavMenu from "../BallsNavMenu/BallsNavMenu";
import BallsHomePage from "../../pages/BallsHomePage/BallsHomePage";
import MainComponentStyled from "../MainComponentStyled/MainComponentStyled";

const App = (): React.ReactElement => {
  return (
    <>
      <BallsHeader />
      <BallsNavMenu />
      <MainComponentStyled>
        <Routes>
          <Route path="/" element={<Navigate to="/balls" />} />
          <Route path="/balls" element={<BallsHomePage />} />
        </Routes>
      </MainComponentStyled>
    </>
  );
};

export default App;
