import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { deletedata, fetchdata, updatedataedit } from "./redux/Userslice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function App() {
  const [editstate, setEditstate] = useState(true);
  const [editbtn, setEditbtn] = useState(null);
  const dispatch = useDispatch();
  const { items, flage } = useSelector((state) => state.userSlice);

  const refname = useRef();
  const refemail = useRef();
  const refcontact = useRef();
  const refaddress = useRef();

  useEffect(() => {
    dispatch(fetchdata());
  }, [flage]);

  function updatingData(id) {
    if (editstate) {
      let editSelect = items.filter((item) => item.id == id);
      console.log(editSelect);

      refname.current.value = editSelect[0].name;
      refemail.current.value = editSelect[0].email;
      refcontact.current.value = editSelect[0].contact;
      refaddress.current.value = editSelect[0].address;

      setEditstate(false);
      setEditbtn(id);
    } else {
      dispatch(
        updatedataedit({
          id: id,
          name: refname.current?.value,
          email: refemail.current?.value,
          contact: refcontact.current?.value,
          address: refaddress.current?.value,
        })
      );

      cleanup();
      setEditbtn(null);
      setEditstate(true);
    }
  }

  function cleanup() {
    refname.current.value = "";
    refemail.current.value = "";
    refcontact.current.value = "";
    refaddress.current.value = "";
  }

  // console.log(usersdata);
  return (
    <>
      <div
        className="box_cinatainer"
        style={{ display: "grid", placeItems: "center" }}
      >
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off"
          className="box"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            inputRef={refname}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            inputRef={refemail}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            inputRef={refcontact}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            inputRef={refaddress}
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </div>

      {/* <Button onClick={() => dispatch(fetchdata())}>click</Button> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell align="center">{item.name}</StyledTableCell>
                <StyledTableCell align="center"> {item.email} </StyledTableCell>
                <StyledTableCell align="center">{item.contact}</StyledTableCell>
                <StyledTableCell align="center">{item.address}</StyledTableCell>

                <StyledTableCell align="center">
                  <Button
                    style={{ color: "white", backgroundColor: "red" }}
                    onClick={() => {
                      dispatch(deletedata(item.id));
                    }}
                  >
                    Delete
                  </Button>{" "}
                  <Button
                    variant="contained"
                    onClick={() => updatingData(item.id)}
                  >
                    {editbtn == item.id ? "Done" : "Edit"}
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
