import {
    Table, TableBody, TableCell, TableHead, TableRow, IconButton,
} from "@mui/material";
import {Edit as EditIcon, Delete as DeleteIcon} from "@mui/icons-material";

const initialRows = [
    {
        name: "Иванов Алексей Сергеевич",
        login: "ivanov_sergeevich",
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
        login: "smirnova_maria_vladimirova",
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
        login: "petrov_dmitriy_aleksandrovich",
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
        login: "sokolova_elena_viktorovna",
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
        login: "kuznetsov_andrei_ivanovich",
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

export const ManagersTable = () => {
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
