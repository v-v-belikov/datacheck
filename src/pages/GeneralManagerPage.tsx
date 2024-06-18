import update from "immutability-helper"
// import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { Button } from "@mui/material"
import { InspectorForms } from "./InspectorForms"
import { useState } from "react"


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
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {isChecked: false, formTitle: "Форма 1"},
          {isChecked: false, formTitle: "Форма 2"},
          {isChecked: false, formTitle: "Форма 3"},
        ]
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
        ]
      },
    ]

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
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {isChecked: false, formTitle: "Форма 1"},
          {isChecked: false, formTitle: "Форма 2"},
          {isChecked: false, formTitle: "Форма 3"},
        ]
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
        ]
      },
    ]
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
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {isChecked: false, formTitle: "Форма 1"},
          {isChecked: false, formTitle: "Форма 2"},
          {isChecked: false, formTitle: "Форма 3"},
        ]
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
        ]
      },
    ]
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
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {isChecked: false, formTitle: "Форма 1"},
          {isChecked: false, formTitle: "Форма 2"},
          {isChecked: false, formTitle: "Форма 3"},
        ]
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
        ]
      },
    ]
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
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {isChecked: false, formTitle: "Форма 1"},
          {isChecked: false, formTitle: "Форма 2"},
          {isChecked: false, formTitle: "Форма 3"},
        ]
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
        ]
      },
    ]
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
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {isChecked: false, formTitle: "Форма 1"},
          {isChecked: false, formTitle: "Форма 2"},
          {isChecked: false, formTitle: "Форма 3"},
        ]
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
        ]
      },
    ]
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
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {isChecked: false, formTitle: "Форма 1"},
          {isChecked: false, formTitle: "Форма 2"},
          {isChecked: false, formTitle: "Форма 3"},
        ]
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
        ]
      },
    ]
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
]

export const GeneralManagerPage = () => {
  const [rows, setRows] = useState(initialRows)

  const onChangeForm = (rowIndex: number, eventIndex: number, formIndex: number) => {
    const updatedRows = update(rows, {
      [rowIndex]: {
        events: {
          [eventIndex]: {
            forms: {
              [formIndex]: {
                isChecked: {
                  $set: !rows[rowIndex].events[eventIndex].forms[formIndex].isChecked
                }
              }
            }
          }
        }
      }
    })
    setRows(updatedRows)
  }

  const onChangeEvent = (rowIndex: number, eventIndex: number,) => {
    const newCheckboxValue = !rows[rowIndex].events[eventIndex].forms[0].isChecked
    const updatedForms = update(rows[rowIndex].events[eventIndex].forms, {
      $apply: items => items.map(item => ({ ...item, isChecked: newCheckboxValue }))
    });

    const updatedRows = update(rows, {
      [rowIndex]: {
        events: {
          [eventIndex]: {
            forms: {
              $set: updatedForms
            }
          }
        }
      }
    })
    setRows(updatedRows)
  }
  
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column", height: "100vh", paddingTop: "50px"}}>
      <div style={{width: "750px"}}>
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
      </div>
    </div>
  )
}