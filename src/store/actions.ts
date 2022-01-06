import axios from "axios";
import { Dispatch } from "redux";
import {
  LOADING,
  SET_RESERVATIONS,
  SET_SPORTS,
  ADD_RESERVATION,
  REMOVE_RESERVATION,
} from "./actionTypes";

const BASE_URL = "http://localhost:8000";

export const getSports = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get(`${BASE_URL}/sport/getAllSports`);
    if (res.data) {
      dispatch({ type: SET_SPORTS, payload: res.data });
      dispatch({ type: LOADING, payload: false });
    } else {
      console.log("Unable to fetch");
    }
  };
};

export const getReservations = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get(`${BASE_URL}/reservation/getReservations`);
    if (res.data) {
      dispatch({ type: SET_RESERVATIONS, payload: res.data });
      dispatch({ type: LOADING, payload: false });
    } else {
      console.log("Unable to fetch");
    }
  };
};

export const setReservation = (date: Date) => {
  return async (dispatch: Dispatch) => {
    const res = await axios.post(`${BASE_URL}/reservation/createReservation`, {
      date,
    });
    if (res.data) {
      dispatch({ type: ADD_RESERVATION, payload: res.data });
      dispatch({ type: LOADING, payload: false });
    } else {
      console.log("Unable to fetch");
    }
  };
};

export const removeReservation = (id: string) => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get(
      `${BASE_URL}/reservation/removeReservation/${id}`
    );
    if (res.data) {
      dispatch({ type: REMOVE_RESERVATION, payload: id });
      dispatch({ type: LOADING, payload: false });
    } else {
      console.log("Unable to fetch");
    }
  };
};
