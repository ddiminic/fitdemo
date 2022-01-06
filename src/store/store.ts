import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fitdemoReducer from "./reducer";
const rootReducer = combineReducers({
  fitdemoReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
