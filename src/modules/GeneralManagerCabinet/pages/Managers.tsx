import {useState} from "react";
import update from "immutability-helper";
import {Button} from "@mui/material";
import {InspectorForms} from "../InspectorForms";
import {ManagerForms} from "../ManagerForms";

const initialRows = [
    {
        name: "Иванов Алексей Сергеевич",
        events: [
            {
                eventName: "Чемпионат России по кёрлингу",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                    {isChecked: false, formTitle: "Форма 4"},
                ],
            },
            {
                eventName: "Осенняя собачья олимпиада",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                ],
            },
            {
                eventName: "Форум Россия",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                    {isChecked: false, formTitle: "Форма 4"},
                    {isChecked: false, formTitle: "Форма 5"},
                    {isChecked: false, formTitle: "Форма 6"},
                ],
            },
        ],

    },
    {
        name: "Смирнова Мария Владимировна",
        events: [
            {
                eventName: "Чемпионат России по кёрлингу",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                    {isChecked: false, formTitle: "Форма 4"},
                ],
            },
            {
                eventName: "Осенняя собачья олимпиада",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                ],
            },
            {
                eventName: "Форум Россия",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                    {isChecked: false, formTitle: "Форма 4"},
                    {isChecked: false, formTitle: "Форма 5"},
                    {isChecked: false, formTitle: "Форма 6"},
                ],
            },
        ],
    },
    {
        name: "Петров Дмитрий Александрович",
        events: [
            {
                eventName: "Чемпионат России по кёрлингу",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                    {isChecked: false, formTitle: "Форма 4"},
                ],
            },
            {
                eventName: "Осенняя собачья олимпиада",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                ],
            },
            {
                eventName: "Форум Россия",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                    {isChecked: false, formTitle: "Форма 4"},
                    {isChecked: false, formTitle: "Форма 5"},
                    {isChecked: false, formTitle: "Форма 6"},
                ],
            },
        ],
    },
    {
        name: "Соколова Елена Викторовна",
        events: [
            {
                eventName: "Чемпионат России по кёрлингу",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                    {isChecked: false, formTitle: "Форма 4"},
                ],
            },
            {
                eventName: "Осенняя собачья олимпиада",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                ],
            },
            {
                eventName: "Форум Россия",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                    {isChecked: false, formTitle: "Форма 4"},
                    {isChecked: false, formTitle: "Форма 5"},
                    {isChecked: false, formTitle: "Форма 6"},
                ],
            },
        ],
    },
    {
        name: "Кузнецов Андрей Иванович",
        events: [
            {
                eventName: "Чемпионат России по кёрлингу",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                    {isChecked: false, formTitle: "Форма 4"},
                ],
            },
            {
                eventName: "Осенняя собачья олимпиада",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                ],
            },
            {
                eventName: "Форум Россия",
                forms: [
                    {isChecked: false, formTitle: "Форма 1"},
                    {isChecked: false, formTitle: "Форма 2"},
                    {isChecked: false, formTitle: "Форма 3"},
                    {isChecked: false, formTitle: "Форма 4"},
                    {isChecked: false, formTitle: "Форма 5"},
                    {isChecked: false, formTitle: "Форма 6"},
                ],
            },
        ],
    },
];

export const Managers = () => {
    console.log("");
    const [rows, setRows] = useState(initialRows);

    const onChangeForm = (rowIndex: number, eventIndex: number, formIndex: number) => {
        const updatedRows = update(rows, {
            [rowIndex]: {
                events: {
                    [eventIndex]: {
                        forms: {
                            [formIndex]: {
                                isChecked: {
                                    $set: !rows[rowIndex].events[eventIndex].forms[formIndex].isChecked,
                                },
                            },
                        },
                    },
                },
            },
        });
        setRows(updatedRows);
    };

    const onChangeEvent = (rowIndex: number, eventIndex: number) => {
        const newCheckboxValue = !rows[rowIndex].events[eventIndex].forms[0].isChecked;
        const updatedForms = update(rows[rowIndex].events[eventIndex].forms, {
            $apply: (items: Array<{isChecked: boolean; formTitle: string}>) => items.map(item => ({...item, isChecked: newCheckboxValue})),
        });

        const updatedRows = update(rows, {
            [rowIndex]: {
                events: {
                    [eventIndex]: {
                        forms: {
                            $set: updatedForms,
                        },
                    },
                },
            },
        });
        setRows(updatedRows);
    };

    return (
        <div>
            <h1 style={{marginBottom: "50px"}}>Менеджеры</h1>
            {rows.map((operator, index) => (
                <ManagerForms
                    key={operator.name}
                    name={operator.name}
                    events={operator.events}
                    onChangeForm={onChangeForm}
                    rowIndex={index}
                    onChangeEvent={onChangeEvent}
                />
            ))}
            <div style={{display: "flex", justifyContent: "flex-end", paddingTop: "20px"}}>
                <Button style={{padding: "10px 20px"}} variant="contained">Сохранить изменения</Button>
            </div>
        </div>
    );
};
