import React from "react";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper,
} from "@mui/material";
import {Edit as EditIcon, Delete as DeleteIcon} from "@mui/icons-material";

const initialRows = [
    {
        name: "Иван Иванович Петров",
        login: "ivan123",
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
        login: "aleksey789",
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
        login: "olga987",
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
        login: "maria456",
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
        login: "dmitry789",
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
        login: "ekaterina123",
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
        login: "sergey567",
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

export const OperatorsTable = () => {
    const handleEdit = id => {
    // Логика для редактирования строки
        console.log(`Edit row with id: ${id}`);
    };

    const handleDelete = id => {
    // Логика для удаления строки
        console.log(`Delete row with id: ${id}`);
    };

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ФИО</TableCell>
                    <TableCell>Логин</TableCell>
                    <TableCell align="right">Действия</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {initialRows.map(row => (
                    <TableRow key={row.name}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.login}</TableCell>
                        <TableCell align="right">
                            <IconButton onClick={() => handleEdit(row.name)}>
                                <EditIcon/>
                            </IconButton>
                            <IconButton onClick={() => handleDelete(row.name)}>
                                <DeleteIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
