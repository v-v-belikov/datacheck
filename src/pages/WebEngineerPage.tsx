import { Box, Button, Checkbox, FormControl, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import {useState} from 'react';
import update from 'immutability-helper';

const formFields = [
  "nameRussia",
  "passportNumber",
  "passportSeria",
  // "nameRussia",
];

const headers = [
  <Checkbox/>,
  "Поле документа",
  "Поле формы",
]


const initialRows = [
  {
    status: false,
    docFieldName: "Паспорт выдан",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Дата выдачи паспорта",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Код подразделения",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Серия паспорта",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Номер паспорта",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Фамилия (на русском)",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Имя (на русском)",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Отчество (на русском)",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Фамилия (на английском)",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Имя (на английском)",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Пол",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Дата рождения",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Место рождения",
    formFieldName: ""
  },
  {
    status: false,
    docFieldName: "Гражданство",
    formFieldName: ""
  },
]

export const WebEngineerPage = () => {
  const [rows, setRows] = useState(initialRows)
  return (
    <div style={{paddingTop: "50px"}}>
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 750 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableCell align="left">{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.docFieldName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left"><Checkbox/></TableCell>
                  <TableCell align="left">{row.docFieldName}</TableCell>
                  <TableCell align="left">
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Поле</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={formFields[0]}
                          value={rows[index].formFieldName}
                          label="Поле"
                          onChange={(evt) => {
                            const updatedRows = update(rows, {
                              [index]: {
                                formFieldName: {
                                  $set: evt.target.value
                                }
                              }
                            })
                            setRows(updatedRows)
                          }}
                        >
                          {
                            formFields.map(field => (
                              <MenuItem value={10}>{field}</MenuItem>
                            ))
                          }
                        </Select>
                      </FormControl>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{display: "flex", justifyContent: "flex-end", paddingTop: "20px"}}>
          <Button style={{padding: "10px 20px"}} variant="contained">Сохранить изменения</Button>
        </div>
      {/* <div style={{
        display: "flex",
        alignItems: "center",
    }}>
        <Checkbox
          style={{
            marginRight: "40px"
          }}
        />
        <span style={{
          marginRight: "40px"
        }}>
          Фамилия
        </span> */}
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Поле"
          value="nameRussia"
          onChange={() => {}}
        >
          
        </Select> */}
        {/* <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Поле</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={formFields[0]}
              value="nameRussia"
              label="Поле"
              onChange={() => {}}
            >
              {
                formFields.map(field => (
                  <MenuItem value={10}>{field}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Box> */}
      {/* </div> */}
    </div>
  )
}