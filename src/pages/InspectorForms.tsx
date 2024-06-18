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
    }>
  }>
}

export const InspectorForms: React.FC<Props> = ({name, events}) => {
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
            events.map(event => (
              <div style={{marginBottom: "25px"}}>
                <div style={{display: "flex", alignItems: "center", fontWeight: "bold", fontSize: "16px"}}>
                    <Checkbox/> {event.eventName}
                </div>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                  {event.forms.map(form => (
                    <div style={{display: "flex", alignItems: "center"}}>
                      <Checkbox/> {form.formTitle}
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
