import changeNumber from "./upDown";
import todoReducers from "./todoReducers";
import { combineReducers } from "redux";
import { ApiReducers } from "./ApiReducers";

const rootReducer = combineReducers({
  changeNumber,
  todoReducers,
  ApiReducers,
});

export default rootReducer;
