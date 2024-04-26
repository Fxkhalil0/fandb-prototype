import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import {changeStatus} from '../../redux/slices/TableSlice'


function TablePage() {
    const { rows } = useSelector((state) => state.TableSlice);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleUpdate = (id) => {
        console.log("Update row with ID:", id);
    };

    const handleDelete = (id) => {
        console.log("Delete row with ID:", id);
    };

    return (
        <>
        <Navbar />
        <div className="table__section">
            <div className="container">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead style={{ backgroundColor: "#F46700" }}>
                            <TableRow>
                                <TableCell>Table ID</TableCell>
                                <TableCell align="right">Table Name</TableCell>
                                <TableCell align="right">Table Seats</TableCell>
                                <TableCell align="right">Table Status</TableCell>
                                <TableCell align="right">Meals</TableCell>
                                <TableCell align="right">Promo Code</TableCell>
                                <TableCell align="right">Total Price</TableCell>
                                <TableCell align="right">Menu</TableCell>
                                <TableCell align="right">Actions</TableCell>
                                <TableCell align="right">Booking</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.seats}</TableCell>
                                    <TableCell align="right">{row.status}</TableCell>
                                    <TableCell align="right">{row.meals}</TableCell>
                                    <TableCell align="right">{row.promo_code}</TableCell>
                                    <TableCell align="right">{row.total_price}</TableCell>
                                    <TableCell align="right">
                                        {
                                            row.status === "Booked" &&
                                        <Button
                                            onClick={()=>navigate(`/menu/${row.id}`)}
                                            variant="outlined"
                                            sx={{
                                                borderColor: "#F46700",
                                                color: "black",
                                                "&:hover": {
                                                    backgroundColor: "rgb(244 103 0 / 9%)",
                                                    borderColor: "#F46700",
                                                },
                                            }}
                                        >
                                            + Add
                                        </Button>
                                        }
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                borderColor: "#F46700",
                                                color: "rgb(244, 103, 0)",
                                                marginRight: "10px",
                                                "&:hover": {
                                                    backgroundColor: "rgb(244 103 0 / 9%)",
                                                    borderColor: "#F46700",
                                                },
                                            }}
                                            onClick={() => handleUpdate(row.id)}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            variant="contained"
                                            style={{ backgroundColor: "#F46700" }}
                                            onClick={() => handleDelete(row.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button
                                            variant="contained"
                                            style={{ backgroundColor: "#F46700" }}
                                            onClick={() => dispatch(changeStatus(row.id))}
                                        >{row.status === "Booked" ? "Free It" : "Book it!"}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
        </>
    );
}

export default TablePage;
