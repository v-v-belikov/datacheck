import {Button} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import "./SuccessButton.scss";

interface Props {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SuccessButton: React.FC<Props> = ({onClick}: Props) => (
    <Button
        className="success-button"
        onClick={onClick}
        startIcon={<CheckIcon className="success-button--icon"/>}
        variant="contained"
    >
        Да
    </Button>
);
