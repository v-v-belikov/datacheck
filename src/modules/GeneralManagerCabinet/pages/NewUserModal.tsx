import React, {useState, ChangeEvent} from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
} from "@mui/material";

interface FormData {
    name: string;
    login: string;
    email: string;
    password: string;
    role: string;
}

interface ModalFormProps {
    open: boolean;
    handleClose: () => void;
    handleSave: (data: FormData) => void;
}

const roles = [
    {value: "operator", label: "Оператор"},
    {value: "manager", label: "Менеджер"},
];

export const NewUserModal: React.FC<ModalFormProps> = ({open, handleClose, handleSave}) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        login: "",
        email: "",
        password: "",
        role: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | ChangeEvent<{name?: string; value: unknown}>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name as string]: value});
    };

    const handleSubmit = () => {
        handleSave(formData);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Новый пользователь</DialogTitle>
            <DialogContent style={{
                minWidth: "600px", padding: "20px", display: "flex", justifyContent: "center",
            }}
            >
                <Box
                    component="form"
                    sx={{
                        display: "flex", flexDirection: "column", gap: 2, width: "500px",
                    }}
                >
                    <TextField
                        label="ФИО"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        label="Логин"
                        name="login"
                        value={formData.login}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        label="E-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        label="Пароль"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                    <FormControl fullWidth variant="standard">
                        <InputLabel>Роль</InputLabel>
                        <Select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            label="Роль"
                        >
                            {roles.map(role => (
                                <MenuItem key={role.value} value={role.value}>
                                    {role.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" style={{backgroundColor: "lightgrey", color: "black"}}>Закрыть</Button>
                <Button onClick={handleSubmit} variant="contained">Сохранить</Button>
            </DialogActions>
        </Dialog>
    );
};
