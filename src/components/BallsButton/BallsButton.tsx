import BallsButtonStyled from "./BallsButtonStyled";

interface BallsButtonProps {
  text: string;
  type: "submit" | "button";
  actionOnClick?: () => void;
  classModifier: string;
}

const BallsButton = ({
  text,
  type,
  actionOnClick,
  classModifier: classModifier,
}: BallsButtonProps): React.ReactElement => (
  <BallsButtonStyled
    className={`button ${classModifier ? `button--${classModifier}` : " "}`}
    type={type}
    onClick={actionOnClick}
  >
    {text}
  </BallsButtonStyled>
);

export default BallsButton;
