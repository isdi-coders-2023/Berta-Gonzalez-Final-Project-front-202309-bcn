import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import BallsHeader from "../BallsHeader/BallsHeader";
import BallsHomePage from "../../pages/BallsHomePage/BallsHomePage";
import BallsLoading from "../BallsLoading/BallsLoading";
import { useAppSelector } from "../../store/hooks";
import ToastStyled from "../../styles/shared/ToastStyled";
import BallsAddPage from "../../pages/BallsAddPage/BallsAddPage";
import BallDetailPage from "../../pages/BallDetailPage/BallDetailPage";
import ScrollToTop from "../../utils/ScrollToTopFunction";
import ModifyBallPage from "../../pages/ModifyBallPage/ModifyBallPage";

const App = (): React.ReactElement => {
  const uiState = useAppSelector((state) => state.uiState);

  return (
    <>
      <BallsHeader />
      {uiState.isLoading && <BallsLoading />}
      <ToastStyled icon={false} autoClose={5000} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/balls" />} />
        <Route path="/balls" element={<BallsHomePage />} />
        <Route path="/add" element={<BallsAddPage />} />
        <Route path="/balls/:ballId" element={<BallDetailPage />} />
        <Route path="/balls/:ballId/modify" element={<ModifyBallPage />} />
      </Routes>
    </>
  );
};

export default App;
