import "./BallsSwitchButtonStyled.css";
import Switch from "react-switch";

interface BallsSwitchButtonProps {
  actionOnChange: () => void;
  classModifier: boolean;
  ballName: string;
}

const BallsSwitchButton = ({
  classModifier,
  actionOnChange,
  ballName,
}: BallsSwitchButtonProps): React.ReactElement => (
  <Switch
    title={`${ballName} switch-button`}
    checked={classModifier}
    onChange={actionOnChange}
  />
);

export default BallsSwitchButton;
