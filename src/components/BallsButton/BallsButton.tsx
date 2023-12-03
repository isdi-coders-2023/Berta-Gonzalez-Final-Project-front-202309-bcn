import BallsButtonStyled from "./BallsButtonStyled";

interface BallsButtonProps {
  text: string;
  type: "submit" | "button";
  actionOnClick?: () => void;
  classModifier: "button--disabled" | "";
}

const BallsButton = ({
  text,
  type,
  actionOnClick,
  classModifier,
}: BallsButtonProps): React.ReactElement => (
  <BallsButtonStyled
    className={`button ${classModifier ? classModifier : ""}`}
    type={type}
    onClick={actionOnClick}
  >
    {text}
  </BallsButtonStyled>
);

export default BallsButton;
