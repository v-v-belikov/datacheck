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
    {id: "1", name: "Чемпионат России по кёрлингу"},
    {id: "2", name: "Осенняя собачья олимпиада"},
    {id: "3", name: "Форум Россия"},
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

export const Priorities: React.FC = () => {
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
        <div style={{minWidth: "60vw"}}>
            <h1 style={{marginBottom: "50px"}}>Приоритеты проверки анкет по проектам</h1>
            <div style={{flexBasis: "50%"}}>
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={rows} strategy={verticalListSortingStrategy}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>№</TableCell>
                                        <TableCell>Проекты</TableCell>
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
        </div>
    );
};
