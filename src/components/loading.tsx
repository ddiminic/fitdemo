
import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const Loading = () => {
    const loadingState = useSelector(
        (state: RootState) => state.fitdemoReducer.loading
      );

  return (
    <Backdrop sx={{ color: "#fff", zIndex: 1000 }} open={loadingState}>
        <CircularProgress color="inherit" />
      </Backdrop>
  );
};