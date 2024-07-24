import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {useNavigate} from "react-router-dom";
import "./StartScreen.scss";

export const StartScreen: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="start-screen">
            <button
                className="start-screen__btn"
                onClick={() => navigate("/inspector/scan-check")}
                type="button"
            >
                <PlayCircleIcon className="start-screen--icon"/>
                <div className="start-screen__btn-text">
                    Начать проверку
                </div>
            </button>
        </div>
    );
};
