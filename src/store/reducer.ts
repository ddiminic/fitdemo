import {
  REMOVE_RESERVATION,
  SET_RESERVATIONS,
  ERROR,
  LOADING,
  SET_SPORTS,
  ADD_RESERVATION,
  AppActionTypes,
} from "./actionTypes";
const initialState = {
  loading: false,
  // todo :) implement error overlay, like the loading one, just throw the message from the API
  error: false,
  sports: [],
  reservations: [],
};

function fitdemoReducer(state = initialState, action: AppActionTypes | any) {
  switch (action.type) {
    case REMOVE_RESERVATION:
      return {
        ...state,
        reservations: state.reservations.filter(
          (reservation: any) => reservation._id !== action.payload
        ),
      };
    case ADD_RESERVATION:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case SET_RESERVATIONS:
      return { ...state, reservations: action.payload };
    case SET_SPORTS:
      return { ...state, sports: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default fitdemoReducer;
