// import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { InspectorForms } from "./InspectorForms"


// const headers = [
//   "Оператор",
//   "Форум Россия",
//   "Екат",
//   "Олимпиада",
//   "Армия 2024",
// ]

const rows = [ 
{
    name: "Иван Иванович Петров",
    events: [
      {
        eventName: "Чемпионат России по кёрлингу",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
        ]
      },
      {
        eventName: "Форум Россия",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
          {formTitle: "Форма 5"},
          {formTitle: "Форма 6"},
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
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
        ]
      },
      {
        eventName: "Форум Россия",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
          {formTitle: "Форма 5"},
          {formTitle: "Форма 6"},
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
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
        ]
      },
      {
        eventName: "Форум Россия",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
          {formTitle: "Форма 5"},
          {formTitle: "Форма 6"},
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
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
        ]
      },
      {
        eventName: "Форум Россия",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
          {formTitle: "Форма 5"},
          {formTitle: "Форма 6"},
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
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
        ]
      },
      {
        eventName: "Форум Россия",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
          {formTitle: "Форма 5"},
          {formTitle: "Форма 6"},
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
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
        ]
      },
      {
        eventName: "Форум Россия",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
          {formTitle: "Форма 5"},
          {formTitle: "Форма 6"},
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
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
        ]
      },
      {
        eventName: "Осенняя собачья олимпиада",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
        ]
      },
      {
        eventName: "Форум Россия",
        forms: [
          {formTitle: "Форма 1"},
          {formTitle: "Форма 2"},
          {formTitle: "Форма 3"},
          {formTitle: "Форма 4"},
          {formTitle: "Форма 5"},
          {formTitle: "Форма 6"},
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
  return (
    <div style={{display: "flex", justifyContent: "center", height: "100vh", paddingTop: "50px"}}>
      <div style={{width: "750px"}}>
        {rows.map(operator => (
            <InspectorForms
              name={operator.name}
              events={operator.events}
            />
        ))}
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