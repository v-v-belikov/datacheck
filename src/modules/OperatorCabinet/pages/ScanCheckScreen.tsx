import React from "react";
import "./ScanCheckScreen.scss";
import {useNavigate} from "react-router-dom";
import {ImageViewer} from "../components/ImageViewer";
import {useAppSelector} from "../../../store";
import {SuccessButton} from "../components/SuccessButton";
import {ErrorButton} from "../components/ErrorButton";

export const ScanCheckScreen: React.FC = () => {
    const images = useAppSelector(state => state.operator.form?.images);
    const navigate = useNavigate();

    return images ? (
        <div className="scan-check">
            <div className="scan-check__left">
                <ImageViewer
                    images={images}
                    isInGeneralView
                    hideErrorBtn
                />
            </div>
            <div className="scan-check__right">
                <div>
                    <div className="scan-check-question">
                        Скан читаемый?
                    </div>
                    <div className="buttons-group">
                        <SuccessButton
                            onClick={() => navigate("/inspector/photo-check")}
                        />
                        <ErrorButton/>
                    </div>
                </div>
            </div>
        </div>
    // <div>
    //   <div style={{display: "flex", justifyContent: "flex-end"}}>
    //     <Button variant="contained">Завершить смену</Button>
    //   </div>
    // </div>
    ) : null;
};
