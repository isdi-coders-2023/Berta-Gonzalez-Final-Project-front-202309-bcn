import { Navigate, Route, Routes } from "react-router-dom";
import BallsHeader from "../BallsHeader/BallsHeader";
import BallsHomePage from "../../pages/BallsHomePage/BallsHomePage";
import MainContainerStyled from "../../styles/shared/MainContainerStyled";
import BallsLoading from "../BallsLoading/BallsLoading";
import { useAppSelector } from "../../store/hooks";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      <BallsHeader />
      {uiState.isLoading && <BallsLoading />}
      <MainContainerStyled>
        <Routes>
          <Route path="/" element={<Navigate to="/balls" />} />
          <Route path="/balls" element={<BallsHomePage />} />
        </Routes>
      </MainContainerStyled>
    </>
  );
};

export default App;
