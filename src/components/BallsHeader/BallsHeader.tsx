import BallsHeaderStyled from "./BallsHeaderStyled";

const BallsHeader = (): React.ReactElement => {
  return (
    <BallsHeaderStyled className="header">
      <img
        className="logo"
        src="images/logo.webp"
        alt="Nerdmas Balls logo"
        width="240"
        height="51"
      />
    </BallsHeaderStyled>
  );
};

export default BallsHeader;
