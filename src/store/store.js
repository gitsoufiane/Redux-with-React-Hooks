import { createStore, combineReducers, applyMiddleware } from "redux";
import { rateReducer } from "./rates";
import { userReducer } from "./user";
import thunk from "redux-thunk";

export const store = createStore(
  combineReducers({
    user: userReducer,
    rates: rateReducer,
  }),
  applyMiddleware(thunk)
);
