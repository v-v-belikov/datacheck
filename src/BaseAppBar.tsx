import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const headerNav = [
    // {
    //     role: "general-manager",
    //     title: "Главный менеджер",
    // },
    // {
    //     role: "manager",
    //     title: "Менеджер",
    // },
    // {
    //     role: "inspector/start-screen",
    //     title: "Оператор",
    // },
    // {
    //     role: "web-engineer",
    //     title: "Веб-инженер",
    // },
];

// interface Props {
//     // onSelectRole: (role: string) => void;
//     // selectedRole: string | null
// }

const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
};

interface Props {
    onSidebarToggle: () => void;
}

export const BaseAppBar: React.FC<Props> = ({onSidebarToggle}: Props) => {
    const [timer, setTimer] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimer(currentTimer => currentTimer + 1000);
        }, 1000);
    // return clearInterval(interval);
    }, []);
    // const handleCloseNavMenu = () => {}
    return (
        <Box style={{width: "100%"}}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{flexGrow: 1, display: {md: "flex"}}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={onSidebarToggle}
                            edge="start"
                            // sx={{mr: 2, ...(open && {display: "none"})}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        {headerNav.map(page => (
                            <Button
                                color="inherit"
                                component={Link}
                                to={page.role}
                                key={page.role}
                                style={{marginRight: "15px"}}
                                sx={{my: 2, color: "white", display: "block"}}
                            >

                                {page.title}
                            </Button>
                        ))}
                    </Box>
                    {/* <div style={{fontSize: "18px"}}>{formatTime(timer)}</div> */}
                    {/* <Button color="inherit">Завершить смену</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
};
