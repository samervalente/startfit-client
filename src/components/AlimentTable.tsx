import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  quantity: number,
  unity: "g" | "ml" | "uni",
  actions: React.ReactNode | JSX.Element
) {
  return { name, calories, fat, carbs, protein, quantity, unity, actions };
}

const rows = [
  createData("Ovo frito", 200, 6.0, 24, 4.0, 1, "uni", <DeleteIcon />),
  createData("Patê de frango", 237, 9.0, 37, 4.3, 3, "uni", <DeleteIcon />),
  createData(
    "Suquin de acerola",
    262,
    16.0,
    24,
    6.0,
    300,
    "ml",
    <DeleteIcon />
  ),
  createData("Pão de forma", 305, 3.7, 67, 4.3, 2, "uni", <DeleteIcon />),
];

export default function AlimentTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Alimento</TableCell>
            <TableCell align="center">Calorias</TableCell>
            <TableCell align="center">Carboidratos&nbsp;(g)</TableCell>
            <TableCell align="center">Proteinas&nbsp;(g)</TableCell>
            <TableCell align="center">Gorduras&nbsp;(g)</TableCell>
            <TableCell align="center">Quantidade&nbsp;</TableCell>
            <TableCell align="center">Ações&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">{row.quantity + row.unity}</TableCell>

              <TableCell align="center" className="&:last-child:cursor-pointer">
                {row.actions}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
