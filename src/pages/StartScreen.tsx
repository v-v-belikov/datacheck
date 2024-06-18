import { Button } from "@mui/material"
import playButton from "../assets/play-button.svg"
import React from "react"

interface Props {
  onStart: () => void
}

export const StartScreen: React.FC<Props> = ({onStart}) => {
  return (
    <div style={{display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center", height: "100%"}}>
      <Button onClick={onStart} style={{display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
        <img width="160px" height="160px" src={playButton}/>
        <div style={{marginTop: "25px", fontWeight: "bold", fontSize: "20px", color: "black",}}>Начать проверку</div>
      </Button>
    </div>
  )
} 