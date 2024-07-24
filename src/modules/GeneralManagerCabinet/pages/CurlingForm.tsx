import {FormsTable} from "../FormsTable";
import forms from "../forms.json";

export const CurlingForm = () => {
    console.log("");
    return (
        <div style={{minWidth: "60vw"}}>
            <FormsTable rows={forms.filter(item => item.event === "Чемпионат России по кёрлингу")}/>
        </div>
    );
};
