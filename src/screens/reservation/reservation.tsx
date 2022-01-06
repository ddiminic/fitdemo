import { LocalizationProvider, StaticDatePicker } from "@mui/lab";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import React, { useEffect } from "react";
import { useStyles } from "./reservation.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getReservations, removeReservation, setReservation } from "../../store/actions";
import { LOADING } from "../../store/actionTypes";

export const Reservation = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<Date | null>(new Date());
  const reservations = useSelector(
    (state: RootState) => state.fitdemoReducer.reservations
  );
  useEffect(() => {
    dispatch({type: LOADING, payload: true});
    dispatch(getReservations());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const remove = (id: string) => {
    dispatch({type: LOADING, payload: true});
    dispatch(removeReservation(id));
  };
  const addReservation = (date: Date | null) => {
    if (date) dispatch(setReservation(date));
  };

  return (
    <div className={classes.container}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker<Date>
          orientation="landscape"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <Button onClick={()=> {addReservation(value)}}>Send reservation</Button>

      <Typography variant="h4">Your reservations:</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Remove reservation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.map((reservation: any) => (
              <TableRow key={reservation._id}>
                <TableCell component="th" scope="row">
                  {reservation.date}
                </TableCell>
                <TableCell>
                  <Button onClick={()=>remove(reservation._id)}>remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
