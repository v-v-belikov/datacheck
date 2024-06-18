import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import Box from '@mui/material/Box';

export const ImageViewer: React.FC<{src: string}> = ({ src }) => {
  const [rotation, setRotation] = useState(0);

  const handleRotateLeft = () => {
    setRotation(rotation - 90);
  };

  const handleRotateRight = () => {
    setRotation(rotation + 90);
  };

  return (
    <div style={{height: "auto", objectFit: "contain"}}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="80%"
                // height="100%"
                position="relative"
              >
                <TransformComponent>
                  <img
                    src={src}
                    alt="Zoomable"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      transition: 'transform 0.2s',
                      transform: `rotate(${rotation}deg)`,
                    }}
                  />
                </TransformComponent>
                <Box display="flex" justifyContent="center" mt={2} style={{position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 2, backgroundColor: 'white'}}>
                  <IconButton onClick={() => zoomIn(0.1)} sx={{ m: 1 }}>
                    <ZoomInIcon />
                  </IconButton>
                  <IconButton onClick={() => zoomOut(0.1)} sx={{ m: 1 }}>
                    <ZoomOutIcon />
                  </IconButton>
                  <IconButton onClick={handleRotateLeft} sx={{ m: 1 }}>
                    <RotateLeftIcon />
                  </IconButton>
                  <IconButton onClick={handleRotateRight} sx={{ m: 1 }}>
                    <RotateRightIcon />
                  </IconButton>
                  <Button onClick={() => resetTransform()} variant="contained" sx={{ m: 1 }}>
                    Сбросить
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </TransformWrapper>
      </Box>
    </div>
  );
};