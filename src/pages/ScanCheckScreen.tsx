import { Button } from "@mui/material"
import React from "react"
import { ImageViewer } from "./ImageViewer"

interface Props {
  onNextStep: () => void;
  onNextForm: () => void;
  scanSrc: string;
}

export const ScanCheckScreen: React.FC<Props> = ({onNextStep, onNextForm, scanSrc}) => {
  return (
    <div>
      <div style={{display: "flex", width: "80vw", height: "85vh", objectFit: "contain"}}>
        <div style={{width: "50%", display: "flex", alignItems: "center", justifyContent: "center", padding: "50px"}}>
          {/* <img src={docs[docIndex].image} style={{height: "100%"}}/> */}
          <ImageViewer
            src={scanSrc}
          />
        </div>
        <div style={{width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
          <div>
            <div style={{fontSize: "18px", fontWeight: "bold", marginBottom: "15px"}}>
              Скан читаемый?
            </div>
            <div style={{display: "flex"}}>
              <Button onClick={onNextStep} variant="contained" style={{width: "160px", backgroundColor: "green", padding: "15px 30px", marginRight: "15px", fontSize: "16px"}}>Да</Button>
              <Button onClick={onNextForm} variant="contained" style={{width: "160px", backgroundColor: "red", padding: "15px 30px", fontSize: "16px"}}>Нет</Button>
            </div>
          </div>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <Button variant="contained">Завершить смену</Button>
      </div>
    </div>
  )
}