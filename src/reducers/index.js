import { combineReducers } from "redux";
import tasks from "./tasks";
import isDisplayForm from "./isDisplayForm";
import taskRepair from "./taskRepair";
import keyword from "./keyword";
const myReducer = combineReducers({
  tasks,
  isDisplayForm,
  taskRepair,
  keyword
});
export default myReducer;
