import { Navigate, Route, Routes } from "react-router-dom";
import BallsHeader from "../BallsHeader/BallsHeader";
import BallsHomePage from "../../pages/BallsHomePage/BallsHomePage";
import MainComponentStyled from "../MainComponentStyled/MainComponentStyled";
import BallsLoading from "../BallsLoading/BallsLoading";
import { useAppSelector } from "../../store/hooks";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      <BallsHeader />
      {uiState.isLoading && <BallsLoading />}
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
