import {Button} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./ErrorButton.scss";

interface Props {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ErrorButton: React.FC<Props> = ({onClick}: Props) => (
    <Button
        className="error-button"
        onClick={onClick}
        startIcon={<CloseIcon className="error-button--icon"/>}
        variant="contained"
    >
        Нет
    </Button>
);
