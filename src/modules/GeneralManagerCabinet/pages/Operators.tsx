import {useState} from "react";
import update from "immutability-helper";
import {Button} from "@mui/material";
import {InspectorForms} from "../InspectorForms";

const initialRows = [
    {
        name: "Иван Иванович Петров",
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
        name: "Алексей Сергеевич Смирнов",
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
        name: "Ольга Викторовна Сидорова",
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
        name: "Мария Александровна Кузнецова",
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
        name: "Дмитрий Владимирович Лебедев",
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
        name: "Екатерина Петровна Морозова",
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
        name: "Сергей Павлович Новиков",
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
// {
//     operator: "Анна Борисовна Иванова",
//     "Форум Россия": false,
//     "Екат": false,
//     "Олимпиада": false
// },
// {
//     operator: "Михаил Николаевич Попов",
//     "Форум Россия": false,
//     "Екат": false,
//     "Олимпиада": false
// },
// {
//     operator: "Наталья Михайловна Васильева",
//     "Форум Россия": false,
//     "Екат": false,
//     "Олимпиада": false
// }
];

export const Operators = () => {
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
            <h1 style={{marginBottom: "50px"}}>Операторы</h1>
            {rows.map((operator, index) => (
                <InspectorForms
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
