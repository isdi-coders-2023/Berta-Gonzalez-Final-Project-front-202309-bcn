import BallNotFoundPageStyled from "./BallNotFoundPageStyled";

const BallNotFoundPage = (): React.ReactElement => {
  return (
    <BallNotFoundPageStyled>
      <div className="not-found">
        <h1 className="not-found__title">Page not found</h1>
        <img
          className="not-found__dino"
          src="/images/notfound.webp"
          alt="christmas dinosaur page not found"
        />
      </div>
    </BallNotFoundPageStyled>
  );
};

export default BallNotFoundPage;
