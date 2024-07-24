import React, {useState} from "react";
import {
    DndContext,
    closestCenter,
    useSensor,
    useSensors,
    PointerSensor,
} from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
    useSortable,
    arrayMove,
} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Select, MenuItem, FormControl, InputLabel,
} from "@mui/material";

interface Row {
    id: string;
    name: string;
}

const initialRows: Row[] = [
    {id: "1", name: "VIP"},
    {id: "2", name: "Пресса"},
    {id: "3", name: "Участник"},
    {id: "4", name: "Спикер"},
    {id: "5", name: "Организатор"},
    {id: "6", name: "Артист"},
    {id: "7", name: "Безопасность"},
    {id: "8", name: "Персонал"},
];

const SortableItem = ({id, name, index}: {id: string; name: string; index: number}) => {
    const {
        attributes, listeners, setNodeRef, transform, transition,
    } = useSortable({id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: "grab",
    };

    return (
        <TableRow ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <TableCell style={{width: "7.5%"}}>
                {index + 1}
                .
            </TableCell>
            <TableCell>{name}</TableCell>
        </TableRow>
    );
};

export const ManagerPage: React.FC = () => {
    const [rows, setRows] = useState<Row[]>(initialRows);
    const [selectValue, setSelectValue] = useState("");

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        }),
    );

    const handleDragEnd = ({active, over}: {active: any; over: any}) => {
        if (active.id !== over.id) {
            setRows(items => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    return (
        <div style={{width: "750px", paddingTop: "30px"}}>
            <h1>Приоритеты проверки анкет по категориям</h1>
            <FormControl style={{minWidth: "300px"}}>
                <InputLabel id="demo-simple-select-label">Проект</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectValue}
                    label="Проект"
                    onChange={evt => setSelectValue(evt.target.value)}
                >
                    <MenuItem value="Осенняя собачья олимпиада">Осенняя собачья олимпиада</MenuItem>
                    <MenuItem value="Чемпионат России по кёрлингу">Чемпионат России по кёрлингу</MenuItem>
                    <MenuItem value="Форум Россия">Форум Россия</MenuItem>
                </Select>
            </FormControl>
            {selectValue && (
            <div style={{flexBasis: "50%", width: "750px", paddingTop: "30px"}}>
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={rows} strategy={verticalListSortingStrategy}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>№</TableCell>
                                        <TableCell>Группа гостей</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <SortableItem key={row.id} id={row.id} name={row.name} index={index}/>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </SortableContext>
                </DndContext>
                <div style={{display: "flex", justifyContent: "flex-end", paddingTop: "20px"}}>
                    <Button style={{padding: "10px 20px"}} variant="contained">Сохранить изменения</Button>
                </div>
            </div>
            )}
        </div>
    );
};
