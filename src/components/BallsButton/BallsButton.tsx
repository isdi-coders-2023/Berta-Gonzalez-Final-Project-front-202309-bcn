import BallsButtonStyled from "./BallsButtonStyled";

interface BallsButtonProps {
  text: string;
  type: "submit" | "button";
  isDisabled?: boolean;
  actionOnClick?: () => void;
  className?: string;
}

const BallsButton = ({
  text,
  type,
  isDisabled,
  actionOnClick,
  className,
}: BallsButtonProps): React.ReactElement => (
  <BallsButtonStyled
    className={className}
    disabled={isDisabled}
    type={type}
    onClick={actionOnClick}
  >
    {text}
  </BallsButtonStyled>
);

export default BallsButton;
