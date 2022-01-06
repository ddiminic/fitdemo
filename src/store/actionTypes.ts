export const SET_SPORTS = 'SET_SPORTS';
export const SET_RESERVATIONS = 'SET_RESERVATIONS';
export const ADD_RESERVATION = 'ADD_RESERVATION';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';
type IReservation = {
    date: Date
}
type ISport = {
    sport: string;
    description: string;
    image: string;
}

interface SetErrorAction {
    type: typeof ERROR;
    payload: boolean;
}

interface SetLoadingAction {
    type: typeof LOADING;
    payload: boolean;
}

interface SetSports {
    type: typeof SET_SPORTS;
    payload: ISport[];
}

interface SetReservation {
    type: typeof SET_RESERVATIONS;
    payload: IReservation[];
}
export type AppActionTypes = SetReservation | SetErrorAction | SetLoadingAction | SetSports;