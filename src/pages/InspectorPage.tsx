import { useState } from "react";
import update from "immutability-helper";
import { ScanCheckScreen } from "./ScanCheckScreen";
import { PhotoCheckScreen } from "./PhotoCheckScreen";
import { FieldCheckScreen } from "./FieldCheckScreen";
import { StartScreen } from "./StartScreen";
import passport1 from "../assets/passport1.jpg"
import photo1 from "../assets/man1.jpg"

// Массив анкет
// Оценка скана - Да - следующий шаг / Нет - следующая форма 
// Оценка фото - Да - следующий шаг / Нет - следующая форма
// Оценка полей - Да - следующее поле или следующая форма / Нет - следующая форма

const initialForms = [
  {
    scanSrc: passport1,
    photoSrc: photo1,
    fields: [
      {
        title: "Фамилия",
        value: "Пикабушник"
      },
      {
        title: "Имя",
        value: "Стэнли"
      }
    ],
    isBad: false, 
  }
]

export const InspectorPage = () => {
  const [forms, setForms] = useState(initialForms);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedFormIndex, setSelectedFormIndex] = useState(0);
  const [selectedFieldIndex, setSelectedFieldIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState<keyof typeof componentsToStep>("scanCheck");


  const onNextForm = () => {
    if(selectedFormIndex < forms.length - 1) {
      setSelectedFormIndex(index => index + 1);
      setCurrentStep("scanCheck")
      return;
    }
    // Конец
  }

  const onNextStep = () => {
    if(currentStep === "scanCheck") {
      setCurrentStep("photoCheck")
    } else if (currentStep === "photoCheck") {
      setCurrentStep("fieldCheck")
    } 
  }

  const onNextField = () => {
    if(selectedFieldIndex < forms[selectedFormIndex].fields.length - 1) {
      setSelectedFieldIndex(index => index + 1);
      return;
    }
  }

  const onFieldValueChanged = (value: string) => {
    const updatedForms = update(forms, {
      [selectedFormIndex]: {
        fields: {
          [selectedFieldIndex]: {
            value: {
              $set: value
            }
          }
        }
      }
    })
    setForms(updatedForms); 
  }

  const componentsToStep = {
    "scanCheck": (
      <ScanCheckScreen
        scanSrc={forms[selectedFormIndex].scanSrc}
        onNextStep={onNextStep} 
        onNextForm={onNextForm}
      />
    ),
    "photoCheck": (
      <PhotoCheckScreen 
        scanSrc={forms[selectedFormIndex].scanSrc}
        photoSrc={forms[selectedFormIndex].photoSrc}
        onNextStep={onNextStep} 
        onNextForm={onNextForm}
      />
    ),
    "fieldCheck": (
      <FieldCheckScreen
        scanSrc={forms[selectedFormIndex].scanSrc}
        field={forms[selectedFormIndex].fields[selectedFieldIndex]}
        onFieldValueChanged={onFieldValueChanged}
        onNextField={onNextField}
        onNextForm={onNextForm}
      />
    ),
  }
  
  return isStarted ? componentsToStep[currentStep] : <StartScreen onStart={() => setIsStarted(true)}/>
}