import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import "./EndScreen.scss";

export const EndScreen = () => (
    <div className="end-screen">
        <div className="title-container">
            <SentimentVeryDissatisfiedIcon className="end-icon"/>
            <h1>
                Извините, анкеты закончились.
                <br/>
                Обратитесь как можно скорее к руководителю.
            </h1>
        </div>
    </div>
);
