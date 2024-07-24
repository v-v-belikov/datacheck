import update from "immutability-helper";
// import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import {
    Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from "@mui/material";
import {useState} from "react";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {InspectorForms} from "./InspectorForms";
import { Outlet } from "react-router-dom";

// const headers = [
//   "Оператор",
//   "Форум Россия",
//   "Екат",
//   "Олимпиада",
//   "Армия 2024",
// ]

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

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
const CustomTabPanel = (props: TabPanelProps) => {
    const {
        children, value, index, ...other
    } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{p: 3}}>{children}</Box>}
        </div>
    );
};

// const BasicTabs = () => {

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Поиск по проектам"/>
//           <Tab label="Операторы"/>
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//         Item One
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Item Two
//       </CustomTabPanel>
//     </Box>
//   );
// }

const docs = [
    {
        id: "1",
        title: "Анкета 1",
    },
    {
        id: "2",
        title: "Анкета 2",
    },
    {
        id: "3",
        title: "Анкета 3",
    },
];

interface DocsProps {
    setSelectedComponent: () => void;
}

const Docs: React.FC<DocsProps> = ({setSelectedComponent}) => (
    <div>
        <h1>Анкеты</h1>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>№</TableCell>
                        <TableCell>Заголовок</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {docs.map((doc, index) => (
                        <TableRow
                            key={doc.id}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                            onClick={() => setSelectedComponent()}
                        >
                            <TableCell component="th" scope="row" style={{width: "40px"}}>
                                {index + 1}
                            </TableCell>
                            <TableCell align="left">{doc.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
);

interface ProjectsProps {
    setSelectedComponent: () => void;
}
const Projects: React.FC<ProjectsProps> = ({setSelectedComponent}) => (
    <div>
        <h1>Проекты</h1>
        <Paper
            onClick={() => setSelectedComponent()}
            style={{
                height: "60px", display: "flex", alignItems: "center", padding: "20px", marginBottom: "15px",
            }}
        >
            Чемпионат России по кёрлингу
        </Paper>
        <Paper
            onClick={() => setSelectedComponent()}
            style={{
                height: "60px", display: "flex", alignItems: "center", padding: "20px", marginBottom: "15px",
            }}
        >
            Осенняя собачья олимпиада
        </Paper>
        <Paper
            onClick={() => setSelectedComponent()}
            style={{
                height: "60px", display: "flex", alignItems: "center", padding: "20px", marginBottom: "15px",
            }}
        >
            Форум Россия
        </Paper>
    </div>
);

const Doc = () => (
    <div>
        <h1>Анкета</h1>
    </div>
);

const Search = () => {
    const [selectedComponent, setSelectedComponent] = useState("projects");

    const components: {[key: string]: JSX.Element} = {
        projects: <Projects setSelectedComponent={() => setSelectedComponent("docs")}/>,
        docs: <Docs setSelectedComponent={() => setSelectedComponent("doc")}/>,
        doc: <Doc/>,
    };

    return components[selectedComponent];
};

export const GeneralManagerPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
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
        <div style={{
            display: "flex", alignItems: "center", flexDirection: "column", height: "100vh", paddingTop: "30px",
        }}
        >
            <Outlet/>
            {/* <div style={{width: "750px"}}>
                <Box sx={{borderBottom: 1, borderColor: "divider"}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Операторы"/>
                        <Tab label="Поиск по проектам"/>
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <div style={{
                        display: "flex", alignItems: "center", flexDirection: "column", height: "100vh",
                    }}
                    >
                        <div style={{width: "750px"}}>
                            <h1>Операторы (выбор рабочих проектов и форм для сотрудника)</h1>
                            {rows.map((operator, index) => (
                                <InspectorForms
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
                            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {headers.map(header => (
                        <TableCell>{header}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.operator}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.operator}
                        </TableCell>
                        <TableCell align="center"><Checkbox/></TableCell>
                        <TableCell align="center"><Checkbox/></TableCell>
                        <TableCell align="center"><Checkbox/></TableCell>
                        <TableCell align="center"><Checkbox/></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer> */}
                        {/* </div>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Search/>
                </CustomTabPanel>
            </div> */}
        </div>
    );
};
