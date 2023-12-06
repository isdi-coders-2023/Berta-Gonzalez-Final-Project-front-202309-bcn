import BallsLoadingStyled from "./BallsLoadingStyled";

const BallsLoading = (): React.ReactElement => {
  return (
    <BallsLoadingStyled className="loading">
      <h2 className="loading__text">Loading...</h2>
      <img
        className="loading__image"
        alt="loading"
        src="images/loading.webp"
        width="200"
        height="300"
      />
    </BallsLoadingStyled>
  );
};

export default BallsLoading;
