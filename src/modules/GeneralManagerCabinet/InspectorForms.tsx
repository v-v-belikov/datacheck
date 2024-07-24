import Accordion from "@mui/material/Accordion";
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from '@mui/material/Button';
import {Button, Checkbox} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface Props {
    name: string;
    events: Array<{
        eventName: string;
        forms: Array<{
            formTitle: string;
            isChecked: boolean;
        }>;
    }>;
    onChangeForm: (rowIndex: number, eventIndex: number, formIndex: number) => void;
    onChangeEvent: (rowIndex: number, eventIndex: number) => void;
    rowIndex: number;
}

export const InspectorForms: React.FC<Props> = ({
    name, events, onChangeForm, rowIndex, onChangeEvent,
}) => {
    const navigate = useNavigate();
    return (
        <div>
            <Accordion style={{marginBottom: "10px", minWidth: "60vw"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{fontWeight: "bold"}}
                >
                    {name}
                </AccordionSummary>
                <AccordionDetails>
                    {
            events.map((event, eventIndex) => (
                <div style={{marginBottom: "25px"}} key={event.eventName}>
                    <div style={{
                        display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "16px",
                    }}
                    >
                        <Checkbox checked={event.forms.some(form => form.isChecked)} onChange={() => onChangeEvent(rowIndex, eventIndex)}/>
                        {" "}
                        {event.eventName}
                    </div>
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        {event.forms.map((form, formIndex) => (
                            <div style={{display: "flex", alignItems: "center"}} key={form.formTitle}>
                                <Checkbox checked={form.isChecked} onChange={() => onChangeForm(rowIndex, eventIndex, formIndex)}/>
                                {" "}
                                {form.formTitle}
                            </div>
                        ))}
                    </div>
                </div>
            ))
          }
                    <div style={{marginTop: "25px", display: "flex"}}>
                        <Button variant="contained" style={{padding: "10px 20px", marginRight: "10px"}} onClick={() => navigate("/general-manager/operators-forms")}>
                            Проверенные анкеты
                        </Button>
                        <Button variant="contained" style={{padding: "10px 20px"}}>
                            Статистика
                        </Button>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
