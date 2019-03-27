import * as types from "../constants/actionTypes";

const data = JSON.parse(sessionStorage.getItem("tasks"));
const initialState = data ? data : [];
const tasks = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      state.push(action.task);
      sessionStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.EDIT_TASK:
      state.splice(state.indexOf(action.task), 1, action.newTask);
      sessionStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.DELETE_TASK:
      state.splice(state.indexOf(action.task), 1);
      sessionStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case types.A_TO_Z:
      state.sort((a, b) => {
        return a.name.charCodeAt(0) - b.name.charCodeAt(0);
      });
      return [...state];
    case types.Z_TO_A:
      state.sort((a, b) => {
        return b.name.charCodeAt(0) - a.name.charCodeAt(0);
      });
      return [...state];
    default:
      return state;
  }
};
export default tasks;
