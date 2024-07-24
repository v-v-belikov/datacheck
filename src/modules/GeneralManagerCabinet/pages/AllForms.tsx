import {FormsTable} from "../FormsTable";
import forms from "../forms.json";

export const AllForms = () => {
    console.log("");
    return (
        <div style={{minWidth: "60vw"}}>
            <FormsTable rows={forms}/>
        </div>
    );
};
