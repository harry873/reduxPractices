import changeNumber from "./upDown";
import todoReducers from "./todoReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumber,
  todoReducers,
});

export default rootReducer;
