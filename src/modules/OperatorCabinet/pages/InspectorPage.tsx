import {useState} from "react";
import update from "immutability-helper";
import {Snackbar} from "@mui/material";
import {Outlet} from "react-router-dom";
import {ScanCheckScreen} from "./ScanCheckScreen";
import {PhotoCheckScreen} from "./PhotoCheckScreen";
import {FieldCheckScreen} from "./FieldCheckScreen";
import passport1 from "../assets/passport1.jpg";
import passport2 from "../assets/passport2.jpg";
import passport3 from "../assets/passport-2.jfif";
import photo1 from "../assets/man1.jpg";
import photo2 from "../assets/woman1.jpg";
import {EndScreen} from "./EndScreen";

// Массив анкет
// Оценка скана - Да - следующий шаг / Нет - следующая форма
// Оценка фото - Да - следующий шаг / Нет - следующая форма
// Оценка полей - Да - следующее поле или следующая форма / Нет - следующая форма

const initialForms = [
    {
        images: [passport1, passport3],
        photoSrc: photo1,
        fields: [
            {
                title: "Фамилия",
                value: "Пикабушник",
            },
            {
                title: "Имя",
                value: "Стэнли",
            },
        ],
        isBad: false,
    },
    {
        images: [passport2],
        photoSrc: photo2,
        fields: [
            {
                title: "Фамилия",
                value: "Халабудина",
            },
            {
                title: "Имя",
                value: "Юлия",
            },
        ],
        isBad: false,
    },
];

export const InspectorPage = () => {
    const [forms, setForms] = useState(initialForms);
    const [isStarted, setIsStarted] = useState(false);
    const [selectedFormIndex, setSelectedFormIndex] = useState(0);
    const [selectedFieldIndex, setSelectedFieldIndex] = useState(0);
    const [currentStep, setCurrentStep] = useState<keyof typeof componentsToStep>("scanCheck");
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const onNextForm = () => {
        setIsSnackbarOpen(true);
        if (selectedFormIndex < forms.length - 1) {
            setSelectedFormIndex(index => index + 1);
            setCurrentStep("scanCheck");
            return;
        }
        // Конец
        if (selectedFormIndex === forms.length - 1) {
            setCurrentStep("end");
        }
    };

    const onNextStep = () => {
        if (currentStep === "scanCheck") {
            setCurrentStep("photoCheck");
        } else if (currentStep === "photoCheck") {
            setCurrentStep("fieldCheck");
        }
    };

    const onNextField = () => {
        if (selectedFieldIndex < forms[selectedFormIndex].fields.length - 1) {
            setSelectedFieldIndex(index => index + 1);
            return;
        }
        onNextForm();
    };

    const onFieldValueChanged = (value: string) => {
        const updatedForms = update(forms, {
            [selectedFormIndex]: {
                fields: {
                    [selectedFieldIndex]: {
                        value: {
                            $set: value,
                        },
                    },
                },
            },
        });
        setForms(updatedForms);
    };

    const componentsToStep = {
        scanCheck: (
            <ScanCheckScreen
                images={forms[selectedFormIndex].images}
                // onNextStep={onNextStep}
                // onNextForm={onNextForm}
            />
        ),
        photoCheck: (
            <PhotoCheckScreen
                images={forms[selectedFormIndex].images}
                photoSrc={forms[selectedFormIndex].photoSrc}
                // onNextStep={onNextStep}
                // onNextForm={onNextForm}
            />
        ),
        fieldCheck: (
            <FieldCheckScreen
                images={forms[selectedFormIndex].images}
                field={forms[selectedFormIndex].fields[selectedFieldIndex]}
                onFieldValueChanged={onFieldValueChanged}
                // onNextField={onNextField}
                // onNextForm={onNextForm}
            />
        ),
        end: (
            <EndScreen/>
        ),
    };

    return (
        <>
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => setIsSnackbarOpen(false)}
                message={"Проверка данной анкеты завершена со статусом \"Проверка не пройдена\""}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            />
            <Outlet/>
        </>
    );
};
