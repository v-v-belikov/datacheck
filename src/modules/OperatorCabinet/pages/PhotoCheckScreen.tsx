import {useNavigate} from "react-router-dom";
import {ImageViewer} from "../components/ImageViewer";
import "./PhotoCheckScreen.scss";
import {useAppSelector} from "../../../store";
import {SuccessButton} from "../components/SuccessButton";
import {ErrorButton} from "../components/ErrorButton";

export const PhotoCheckScreen: React.FC = () => {
    const {images, photoSrc} = useAppSelector(state => ({
        images: state.operator.form?.images,
        photoSrc: state.operator.form?.photoSrc,
    }));
    const navigate = useNavigate();

    return images && photoSrc ? (
        <div className="photo-check">
            <div className="photo-check__top">
                <div>
                    <div className="photo-check-question">
                        На представленных изображениях один и тот же человек?
                    </div>
                    <div className="photo-check-buttons-group">
                        <SuccessButton
                            onClick={() => navigate("/inspector/field-check")}
                        />
                        <ErrorButton/>
                    </div>
                </div>
            </div>
            <div className="photo-check__images">
                <div className="photo-check-images__left">
                    <ImageViewer
                        images={images}
                        positionBottom
                        key="1"
                    />
                </div>
                <div className="photo-check-images__right">
                    <ImageViewer
                        isInGeneralView
                        images={[photoSrc]}
                        errorBtnText="Фото неразличимо"
                        key="2"
                    />
                </div>
            </div>

        </div>
    ) : null;
};
