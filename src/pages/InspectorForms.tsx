import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
import { Checkbox } from '@mui/material';

interface Props {
  name: string;
  events:  Array<{
    eventName: string;
    forms: Array<{
      formTitle: string;
      isChecked: boolean;
    }>
  }>;
  onChangeForm: (rowIndex: number, eventIndex: number, formIndex: number) => void;
  onChangeEvent: (rowIndex: number, eventIndex: number) => void;
  rowIndex: number;
}

export const InspectorForms: React.FC<Props> = ({name, events, onChangeForm, rowIndex, onChangeEvent}) => {
  
  return (
    <div>
      <Accordion style={{marginBottom: "10px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{fontWeight: 'bold'}}
        >
          {name}
        </AccordionSummary>
        <AccordionDetails>
          {
            events.map((event, eventIndex) => (
              <div style={{marginBottom: "25px"}} key={event.eventName}>
                <div style={{display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "16px"}}>
                    <Checkbox checked={event.forms.some((form) => form.isChecked)} onChange={() => onChangeEvent(rowIndex, eventIndex)}/> {event.eventName}
                </div>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                  {event.forms.map((form, formIndex) => (
                    <div style={{display: "flex", alignItems: "center"}} key={form.formTitle}>
                      <Checkbox checked={form.isChecked} onChange={() => onChangeForm(rowIndex, eventIndex, formIndex)}/> {form.formTitle}
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
