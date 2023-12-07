import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import BallsHeader from "../BallsHeader/BallsHeader";
import BallsHomePage from "../../pages/BallsHomePage/BallsHomePage";
import MainContainerStyled from "../../styles/shared/MainContainerStyled";
import BallsLoading from "../BallsLoading/BallsLoading";
import { useAppSelector } from "../../store/hooks";
import ToastStyled from "../../styles/shared/ToastStyled";
import BallsAddPage from "../../pages/BallsAddPage/BallsAddPage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      <BallsHeader />
      {uiState.isLoading && <BallsLoading />}
      <ToastStyled icon={false} autoClose={5000} />
      <MainContainerStyled>
        <Routes>
          <Route path="/" element={<Navigate to="/balls" />} />
          <Route path="/balls" element={<BallsHomePage />} />
          <Route path="/add" element={<BallsAddPage />} />
        </Routes>
      </MainContainerStyled>
    </>
  );
};

export default App;
