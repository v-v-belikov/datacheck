import {useState} from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import "./App.scss";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import {Provider} from "react-redux";
import {
    Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from "@mui/material";
import {InspectorPage} from "./modules/OperatorCabinet/pages/InspectorPage";
import {GeneralManagerPage} from "./modules/GeneralManagerCabinet/GeneralManagerPage";
import {WebEngineerPage} from "./modules/WebEngineerCabinet/WebEngineerPage";
import {ManagerPage} from "./modules/ManagerCabinet/ManagerPage";
import {BaseAppBar} from "./BaseAppBar";
import {StartScreen} from "./modules/OperatorCabinet/pages/StartScreen";
import {PhotoCheckScreen} from "./modules/OperatorCabinet/pages/PhotoCheckScreen";
import {FieldCheckScreen} from "./modules/OperatorCabinet/pages/FieldCheckScreen";
import {EndScreen} from "./modules/OperatorCabinet/pages/EndScreen";
import {ScanCheckScreen} from "./modules/OperatorCabinet/pages/ScanCheckScreen";
import {store} from "./store";
import {Users} from "./modules/GeneralManagerCabinet/pages/Users";
import {AllForms} from "./modules/GeneralManagerCabinet/pages/AllForms";
import {Managers} from "./modules/GeneralManagerCabinet/pages/Managers";
import {Operators} from "./modules/GeneralManagerCabinet/pages/Operators";
import {Priorities} from "./modules/GeneralManagerCabinet/pages/Priorities";
import {FormItem} from "./modules/GeneralManagerCabinet/pages/FormItem";
import {RussiaForm} from "./modules/GeneralManagerCabinet/pages/RussiaForm";
import { OlympicForm } from "./modules/GeneralManagerCabinet/pages/OlympicForm";
import { CurlingForm } from "./modules/GeneralManagerCabinet/pages/CurlingForm";
import { OperatorsForms } from "./modules/GeneralManagerCabinet/pages/OperatorForms";
import { Statistics } from "./modules/GeneralManagerCabinet/pages/Statistics";

// const pageToRole: {[key: string]: JSX.Element} = {
//     inspector: <InspectorPage/>,
//     "general-manager": <GeneralManagerPage/>,
//     manager: <ManagerPage/>,
//     "web-engineer": <WebEngineerPage/>,
//     // "projects": <ProjectsPage/>,
// };

// const [open, setOpen] = React.useState(false);

// const toggleDrawer = (newOpen: boolean) => () => {
//   setOpen(newOpen);
// };

const generalManagerPages = [
    {title: "Пользователи", link: "general-manager/users"},
    {title: "Операторы", link: "general-manager/operators"},
    {title: "Менеджеры", link: "general-manager/managers"},
    {title: "Приоритеты", link: "general-manager/priorities"},
    {title: "Все анкеты", link: "general-manager/all-forms"},
    {title: "Статистика", link: "general-manager/statistics"},
];

const DrawerList = () => (
    <Box sx={{width: 250}} role="presentation">
        <List>
            {generalManagerPages.map((page, index) => (
                <ListItem key={page.title} disablePadding>
                    <NavLink
                        to={page.link}
                        style={{
                            textDecoration: "none", color: "black", width: "100%", display: "flex",
                        }}
                        className={({isActive, isPending}) =>
                            (isActive ? "active" : "")}
                    >
                        <ListItemButton style={{width: "100%"}}>
                            {/* <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                        </ListItemIcon> */}
                            <ListItemText primary={page.title}/>
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            ))}
        </List>
        <Divider/>
        <List>
            {[{title: "Чемпионат России по кёрлингу", link: "general-manager/curling-form"}, {title: "Осенняя собачья олимпиада", link: "general-manager/olympic-form"}, {title: "Форум Россия", link: "general-manager/russia-form"}].map((page, index) => (
                <ListItem key={page.title} disablePadding>
                    <NavLink
                        to={page.link}
                        style={{
                            textDecoration: "none", color: "black", width: "100%", display: "flex",
                        }}
                        className={({isActive, isPending}) =>
                            (isActive ? "active" : "")}
                    >
                        <ListItemButton style={{width: "100%"}}>
                            {/* <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                        </ListItemIcon> */}
                            <ListItemText primary={page.title}/>
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            ))}
        </List>
    </Box>
);

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Provider store={store}>
            <Router>
                <BaseAppBar onSidebarToggle={() => setIsSidebarOpen(prev => !prev)}/>
                <div style={{display: "flex", width: "100%"}}>
                    <div style={{display: isSidebarOpen ? "flex" : "none", width: "300px", borderRight: "1px solid #eeeded"}}>
                        <DrawerList/>
                    </div>
                    <div style={{
                        display: "flex", flexDirection: "column", flexGrow: 1, width: "100%", alignItems: "center", flexGrow: 2, padding: "25px",
                    }}
                    >
                        <Routes>
                            <Route path="/inspector/*" element={<InspectorPage/>}>
                                <Route index path="start-screen" element={<StartScreen/>}/>
                                <Route path="scan-check" element={<ScanCheckScreen/>}/>
                                <Route path="photo-check" element={<PhotoCheckScreen/>}/>
                                <Route path="field-check" element={<FieldCheckScreen/>}/>
                                <Route path="end-screen" element={<EndScreen/>}/>
                            </Route>
                            <Route path="/general-manager/*" element={<GeneralManagerPage/>}>
                                <Route index path="users" element={<Users/>}/>
                                <Route path="all-forms" element={<AllForms/>}/>
                                <Route path="managers" element={<Managers/>}/>
                                <Route path="operators" element={<Operators/>}/>
                                <Route path="priorities" element={<Priorities/>}/>
                                <Route path="form-item" element={<FormItem/>}/>
                                <Route path="russia-form" element={<RussiaForm/>}/>
                                <Route path="olympic-form" element={<OlympicForm/>}/>
                                <Route path="curling-form" element={<CurlingForm/>}/>
                                <Route path="operators-forms" element={<OperatorsForms/>}/>
                                <Route path="statistics" element={<Statistics/>}/>
                            </Route>
                            <Route path="/manager" element={<ManagerPage/>}/>
                            <Route path="/web-engineer" element={<WebEngineerPage/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </Provider>
    );
};
export default App;

// {selectedRole && (
// <div style={{
//     display: "flex", flexDirection: "column", width: "100%", alignItems: "center", flexGrow: 2, padding: "25px",
// }}
// >
//     {pageToRole[selectedRole]}
// </div>
// )}

{/* <div className="buttons" style={{display: "flex", flexDirection: "column"}}>
             <Button variant="contained" style={{backgroundColor: "black", marginBottom: "10px", padding: "10px"}}>Проверяющий</Button>
             <Button variant="contained" style={{backgroundColor: "black", marginBottom: "10px", padding: "10px"}}>Главный менеджер</Button>
             <Button variant="contained" style={{backgroundColor: "black", marginBottom: "10px", padding: "10px"}}>Менеджер</Button>
             <Button variant="contained" style={{backgroundColor: "black", marginBottom: "10px", padding: "10px"}}>Веб-инженер</Button>
         </div>

       <PhotoCheckPage/>
       <StartPage/>
       <InspectorPage/>
       <GeneralManagerPage/>
       <SelectPage/>
       <WebEngineerPage/>
       <ManagerPage/>
         <div style={{display: "flex", height: "75vh"}}>
           <ImageViewer
             src={passport1}
           />
         </div> */}
