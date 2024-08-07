import {TextField} from "@mui/material";
import {ImageViewer} from "../components/ImageViewer";
import {useAppSelector} from "../../../store";
import {SuccessButton} from "../components/SuccessButton";
import {ErrorButton} from "../components/ErrorButton";
import "./FieldCheckScreen.scss";

export const FieldCheckScreen: React.FC = () => {
    const {images, field} = useAppSelector(state => ({
        images: state.operator.form?.images,
        field: state.operator.form?.fields[0],
    }));

    return images && field ? (
        <div className="field-check">
            <div className="field-check__left">
                <ImageViewer
                    images={images}
                />
            </div>
            <div className="field-check__right">
                <div>
                    <div className="field-check-question">
                        {field.title}
                    </div>
                    <TextField
                        className="field-check__text-field"
                        onChange={evt => {
                            // onFieldValueChanged(evt.target.value);
                        }}
                        value={field.value}
                        variant="outlined"
                        focused
                        fullWidth
                    />
                    <div className="buttons-group">
                        <SuccessButton/>
                        <ErrorButton/>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

// const [docs, setDocs] = useState(data)
// const [docIndex, setDocIndex] = useState(0)
// const [fieldIndex, setFieldIndex] = useState(0)

// const onSuccess = () => {
//   if(fieldIndex === docs[docIndex].fields.length - 1 && docIndex < docs.length - 1) {
//     setDocIndex(index => index + 1);
//     return
//   }
//   if(fieldIndex !== docs[docIndex].fields.length - 1) {
//     setFieldIndex(index => index + 1)
//   }
// }

// const onChange = (evt) => {
//   const newDocs = [...docs]
//   setDocs()
//   docs[docIndex].fields[fieldIndex].title
// }

// return (
//     <div style={{display: "flex", width: "80vw", height: "85vh", objectFit: "contain"}}>
//       <div style={{width: "50%", display: "flex", alignItems: "center", justifyContent: "center", padding: "50px"}}>
//         {/* <img src={docs[docIndex].image} style={{height: "100%"}}/> */}
//         <ImageViewer
//           src={scanSrc}
//         />
//       </div>
//       <div style={{width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
//         <div>
//           <div style={{fontSize: "18px", fontWeight: "bold", marginBottom: "15px"}}>
//             {field.title}
//           </div>
//           <TextField
//             onChange={(evt) => {
//                 onFieldValueChanged(evt.target.value)
//             }}
//             value={field.value}
//             variant="outlined"
//             style={{marginBottom: "15px", width: "100%"}}
//             focused
//             fullWidth
//           />
//           <div style={{display: "flex"}}>
//             <Button onClick={onNextField} variant="contained" style={{width: "160px", backgroundColor: "green", padding: "15px 30px", marginRight: "15px", fontSize: "16px"}}>Ок</Button>
//             <Button onClick={onNextForm} variant="contained" style={{width: "160px", backgroundColor: "red", padding: "15px 30px", fontSize: "16px"}}>Не ок</Button>
//           </div>
//         </div>
//       </div>
//     </div>
// )
