import { Navigate, Route, Routes } from "react-router-dom";
import BallsHeader from "../BallsHeader/BallsHeader";
import BallsNavMenu from "../BallsNavMenu/BallsNavMenu";
import BallsHomePage from "../../pages/BallsHomePage/BallsHomePage";

const App = (): React.ReactElement => {
  return (
    <>
      <BallsHeader />
      <BallsNavMenu />
      <Routes>
        <Route path="/" element={<Navigate to="/balls" />} />
        <Route path="/balls" element={<BallsHomePage />} />
      </Routes>
    </>
  );
};

export default App;
