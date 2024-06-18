import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"


const headers = [
  "Оператор",
  "Форум Россия",
  "Екат",
  "Олимпиада",
  "Армия 2024",
]

const rows = [ 
{
    operator: "Иван Иванович Петров",
    "Форум Россия": false,
    "Екат": false,
    "Олимпиада": false,
    "Армия 2024": false,
},
{
    operator: "Алексей Сергеевич Смирнов",
    "Форум Россия": false,
    "Екат": false,
    "Олимпиада": false,
    "Армия 2024": false,
},
{
    operator: "Ольга Викторовна Сидорова",
    "Форум Россия": false,
    "Екат": false,
    "Олимпиада": false,
    "Армия 2024": false,
},
{
    operator: "Мария Александровна Кузнецова",
    "Форум Россия": false,
    "Екат": false,
    "Олимпиада": false,
    "Армия 2024": false,
},
{
    operator: "Дмитрий Владимирович Лебедев",
    "Форум Россия": false,
    "Екат": false,
    "Олимпиада": false,
    "Армия 2024": false,
},
{
    operator: "Екатерина Петровна Морозова",
    "Форум Россия": false,
    "Екат": false,
    "Олимпиада": false,
    "Армия 2024": false,
},
{
    operator: "Сергей Павлович Новиков",
    "Форум Россия": false,
    "Екат": false,
    "Олимпиада": false,
    "Армия 2024": false,
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
      <div>
        <TableContainer component={Paper}>
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
        </TableContainer>
      </div>
    </div>
  )
}