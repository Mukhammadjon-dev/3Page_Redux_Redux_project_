import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import {
  DarajaReduser,
  LavozimReduser,
  XodimReduser,
} from "./Componet/Reduser";

export default createStore(
  combineReducers({ XodimReduser, LavozimReduser, DarajaReduser }),
  applyMiddleware(logger)
);
