import { combineReducers, createStore } from "redux";
import { ApiReducer } from "./reducers/ApiReducer";
export const store = createStore(
  combineReducers({api:ApiReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
