import React, {
    useEffect, useRef, useState,
} from "react";
import {TransformWrapper, TransformComponent, ReactZoomPanPinchRef} from "react-zoom-pan-pinch";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
import {Tooltip} from "@mui/material";
import useResizeObserver from "use-resize-observer";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {
    images: Array<string>;
    initialScale?: number;
    isInGeneralView?: boolean;
    positionBottom?: boolean;
    hideErrorBtn?: boolean;
    errorBtnText?: string;
}

export const ImageViewer: React.FC<Props> = props => {
    const [selectedImageSrcIndex, setSelectedImageSrcIndex] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [isInGeneralView, setIsInGeneralView] = useState(props.isInGeneralView);
    const imgRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLImageElement>(null);
    const transformWrapperRef = useRef<ReactZoomPanPinchRef>(null);
    const {height: imgHeight = 0} = useResizeObserver({ref: imgRef});
    const {height: containerHeight = 0} = useResizeObserver({ref: containerRef});

    const onSetTransform = (positionY: number) => {
        if (transformWrapperRef.current) {
            const {setTransform} = transformWrapperRef.current;
            setTransform(0, positionY, 1);
        }
    };

    useEffect(() => {
        if (!imgRef.current || !containerRef.current) return;
        const positionY = imgHeight - containerHeight;
        if (props.positionBottom) {
            onSetTransform(-positionY);
        }
    }, [imgHeight, containerHeight]);

    const handleRotateLeft = () => {
        setRotation(rotation - 90);
    };

    const handleRotateRight = () => {
        setRotation(rotation + 90);
    };

    const handleNextImage = () => {
        if (selectedImageSrcIndex + 1 < props.images.length) {
            setSelectedImageSrcIndex(currentIndex => currentIndex + 1);
        }
    };
    const handlePrevImage = () => {
        if (selectedImageSrcIndex - 1 >= 0) {
            setSelectedImageSrcIndex(currentIndex => currentIndex - 1);
        }
    };

    return (
        <div style={{
            height: "100%", width: "100%", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column",
        }}
        >
            <TransformWrapper
                ref={transformWrapperRef}
                initialScale={props.initialScale}
                initialPositionX={0}
                initialPositionY={0}
                limitToBounds={false}
                minScale={0.5}
                panning={{
                    velocityDisabled: true,
                }}
            >
                {({zoomIn, zoomOut, resetTransform}) => (
                    <>
                        <TransformComponent
                            wrapperStyle={{width: "auto", flexGrow: 1}}
                            contentStyle={{height: "100%", width: "auto"}}
                        >
                            <div style={{height: "100%", width: "100%"}} ref={containerRef}>
                                <img
                                    ref={imgRef}
                                    src={props.images[selectedImageSrcIndex]}
                                    alt="Zoomable"
                                    // onLoad={evt => setImgHeight(evt.currentTarget.clientHeight)}
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        objectFit: "contain",
                                        transition: "transform 0.2s",
                                        transform: `rotate(${rotation}deg)`,
                                        ...(isInGeneralView ? {height: "100%"} : {}),
                                    }}
                                />
                            </div>
                        </TransformComponent>
                        <div style={{
                            display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", padding: "12.5px",
                        }}
                        >
                            {
                                props.images.length > 1 && (
                                    <>
                                        <Tooltip title="Назад">
                                            <IconButton
                                            // onClick={() => {
                                            //     zoomIn(0.25);
                                            //     // setIsInGeneralView(false);
                                            // }}
                                            // style={{marginRight: "10px"}}
                                                onClick={handlePrevImage}
                                                size="small"
                                            >
                                                <NavigateBeforeIcon fontSize="small"/>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Вперёд">
                                            <IconButton
                                                size="small"
                                                onClick={handleNextImage}
                                            // onClick={() => {
                                            //     zoomIn(0.25);
                                            //     // setIsInGeneralView(false);
                                            // }}
                                                style={{marginRight: "10px"}}
                                            >
                                                <NavigateNextIcon fontSize="small"/>
                                            </IconButton>
                                        </Tooltip>
                                        {/* <TextField
                                            hiddenLabel
                                            style={{width: "45px", marginRight: "10px"}}
                                            value={selectedImageSrcIndex + 1}
                                        // defaultValue="Small"
                                        // variant="filled"
                                            size="small"
                                        /> */}
                                        <span style={{marginRight: "75px"}}>
                                            {`${selectedImageSrcIndex + 1} / ${props.images.length}`}
                                        </span>
                                    </>
                                )
                            }
                            {/* Количество */}
                            <Tooltip title="Увеличить">
                                <IconButton
                                    onClick={() => {
                                        zoomIn(0.25);
                                        // setIsInGeneralView(false);
                                    }}
                                    // style={{marginRight: "10px"}}
                                >
                                    <ZoomInIcon/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Уменьшить">
                                <IconButton
                                    onClick={() => {
                                        zoomOut(0.25);
                                        // setIsInGeneralView(false);
                                    }}
                                    // style={{marginRight: "10px"}}
                                >
                                    <ZoomOutIcon/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Масштаб по умолчанию">
                                <IconButton
                                    onClick={() => {
                                        resetTransform();
                                        setIsInGeneralView(true);
                                    }}
                                    // style={{marginRight: "10px"}}
                                >
                                    <ZoomInMapIcon/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Повернуть налево">
                                <IconButton
                                    onClick={handleRotateLeft}
                                    // style={{marginRight: "10px"}}
                                >
                                    <RotateLeftIcon/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Повернуть направо">
                                <IconButton
                                    onClick={handleRotateRight}
                                    // style={{marginRight: "10px"}}
                                >
                                    <RotateRightIcon/>
                                </IconButton>
                            </Tooltip>
                            {
                                !props.hideErrorBtn && (
                                    <Button
                                        onClick={() => {
                                            resetTransform();
                                            setRotation(0);
                                        }}
                                        variant="contained"
                                        style={{backgroundColor: "red", marginRight: "10px"}}
                                    >
                                        {props.errorBtnText || "Скан нечитаем"}
                                    </Button>
                                )
                            }
                        </div>
                    </>
                )}
            </TransformWrapper>
        </div>
    );
    // return (
    //   <div style={{ height: "100%", width: "100%", position: "relative" }}>
    //     <TransformWrapper>
    //       {({ zoomIn, zoomOut, resetTransform }) => (
    //         <>
    //           <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
    //             <TransformComponent>
    //               <div style={{height: "100%"}}>
    //                 <img
    //                   src={src}
    //                   alt="Zoomable"
    //                   style={{
    //                     height: "100%",
    //                     objectFit: "contain",
    //                     width: "auto",
    //                     transition: 'transform 0.2s',
    //                     transform: `rotate(${rotation}deg)`,
    //                   }}
    //                 />
    //               </div>
    //             </TransformComponent>
    //           </div>
    //           <div style={{ position: "absolute", bottom: 10, left: 10, display: "flex", backgroundColor: 'white', borderRadius: '5px', padding: '5px' }}>
    //             <IconButton onClick={() => zoomIn(0.1)} sx={{ m: 1 }}>
    //               <ZoomInIcon />
    //             </IconButton>
    //             <IconButton onClick={() => zoomOut(0.1)} sx={{ m: 1 }}>
    //               <ZoomOutIcon />
    //             </IconButton>
    //             <IconButton onClick={handleRotateLeft} sx={{ m: 1 }}>
    //               <RotateLeftIcon />
    //             </IconButton>
    //             <IconButton onClick={handleRotateRight} sx={{ m: 1 }}>
    //               <RotateRightIcon />
    //             </IconButton>
    //             <Button onClick={() => resetTransform()} variant="contained" sx={{ m: 1 }}>
    //               Сбросить
    //             </Button>
    //           </div>
    //         </>
    //       )}
    //     </TransformWrapper>
    //   </div>
    // );
};
