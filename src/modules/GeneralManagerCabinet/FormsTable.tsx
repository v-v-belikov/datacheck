import React from "react";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    TextField, IconButton, Box,
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterListIcon from "@mui/icons-material/FilterList";

const SearchWithFilter = () => {
    const handleSearchChange = event => {
    // Логика обработки изменения поиска
        console.log(event.target.value);
    };

    const handleFilterClick = () => {
    // Логика обработки нажатия на кнопку фильтрации
        console.log("Filter button clicked");
    };

    return (
        <Box display="flex" alignItems="center" style={{width: "100%", marginBottom: "40px"}}>
            <TextField
                label="Поиск"
                variant="outlined"
                onChange={handleSearchChange}
                sx={{mr: 1, flexGrow: 2}}
            />
            <IconButton onClick={handleFilterClick}>
                <FilterAltIcon sx={{color: "black", height: "100%"}}/>
            </IconButton>
        </Box>
    );
};
interface Props {
    rows: Array<{
        id: string;
        surname: string;
        name: string;
        patronymic: string;
        event: string;
    }>;
}

export const FormsTable: React.FC<Props> = props => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <h1>Анкеты</h1>
                <SearchWithFilter/>
            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Фамилия</TableCell>
                            <TableCell>Имя</TableCell>
                            <TableCell>Отчество</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.map(row => (
                            <TableRow key={row.id} onClick={() => navigate("/general-manager/form-item")}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.surname}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.patronymic}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
