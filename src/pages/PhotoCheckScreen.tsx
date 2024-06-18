import { Button} from "@mui/material"
import { ImageViewer } from "./ImageViewer"

interface Props {
  onNextStep: () => void
  onNextForm: () => void
  scanSrc: string;
  photoSrc: string;
}

export const PhotoCheckScreen: React.FC<Props> = ({onNextStep, onNextForm, scanSrc, photoSrc}) => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{display: "flex", width: "80vw", height: "80%", objectFit: "contain", justifyContent: "center", marginBottom: "0"}}>
        <div style={{width: "40%", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px"}}>
          {/* <img src={docs[docIndex].image} style={{height: "100%"}}/> */}
          <ImageViewer
            src={scanSrc}
          />
        </div>
        <div style={{width: "40%", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px"}}>
          {/* <img src={docs[docIndex].image} style={{height: "100%"}}/> */}
          <ImageViewer
            src={photoSrc}
          />
        </div>
      </div>
      <div style={{width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <div>
          <div style={{fontSize: "18px", fontWeight: "bold", marginBottom: "25px"}}>
            На представленных изображения один и тот же человек?
          </div>
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <Button onClick={onNextStep} variant="contained" style={{width: "160px", backgroundColor: "green", padding: "15px 30px", marginRight: "15px", fontSize: "16px"}}>Да</Button>
            <Button  onClick={onNextForm} variant="contained" style={{width: "160px", backgroundColor: "red", padding: "15px 30px", fontSize: "16px"}}>Нет</Button>
          </div>
        </div>
      </div>
    </div>
  )
}