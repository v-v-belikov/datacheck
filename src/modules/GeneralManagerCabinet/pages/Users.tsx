import {
    Accordion, AccordionDetails, AccordionSummary, Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useState} from "react";
import {OperatorsTable} from "./OperatorsTable";
import {NewUserModal} from "./NewUserModal";
import { ManagersTable } from "./ManagersTable";

// ФИО
// Логин
// Удалить

export const Users = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (data: FormData) => {
        console.log("Saved data:", data);
    };
    return (
        <div style={{minWidth: "60vw"}}>
            <h1 style={{marginBottom: "50px"}}>Пользователи</h1>
            <Button variant="contained" style={{marginBottom: "25px"}} onClick={handleOpen}>
                Создать
            </Button>
            <div>
                <Accordion style={{marginBottom: "10px", minWidth: "60vw"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={{fontWeight: "bold"}}
                    >
                        Операторы
                    </AccordionSummary>
                    <AccordionDetails>
                        <OperatorsTable/>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{marginBottom: "10px", minWidth: "60vw"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        style={{fontWeight: "bold"}}
                    >
                        Менеджеры
                    </AccordionSummary>
                    <AccordionDetails>
                        <ManagersTable/>
                    </AccordionDetails>
                </Accordion>
            </div>
            <NewUserModal open={open} handleClose={handleClose} handleSave={handleSave}/>
        </div>
    );
};
