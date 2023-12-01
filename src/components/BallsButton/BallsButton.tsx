import BallsButtonStyled from "./BallsButtonStyled";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  actionOnClick?: () => void;
  modifier: string;
}

const BallsButton = ({
  text,
  type,
  actionOnClick,
  modifier,
}: ButtonProps): React.ReactElement => (
  <BallsButtonStyled
    className={`button ${modifier ? "button--${modifier}" : " "}`}
    type={type}
    onClick={actionOnClick}
  >
    {text}
  </BallsButtonStyled>
);

export default BallsButton;
