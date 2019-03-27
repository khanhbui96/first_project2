import * as types from "../constants/actionTypes";
export const listAll = () => {
  return {
    type: types.LIST_ALL
  };
};
export const addTask = task => {
  return {
    type: types.ADD_TASK,
    task
  };
};
export const deleteTask = task => {
  return {
    type: types.DELETE_TASK,
    task
  };
};
export const editTask = (task, newTask) => {
  return {
    type: types.EDIT_TASK,
    task,
    newTask
  };
};
export const repairTask = task => {
  return {
    type: types.REPAIR_TASK,
    task
  };
};
export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM
  };
};
export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  };
};
export const openForm = () => {
  return {
    type: types.OPEN_FORM
  };
};
// export const searchTask = () => {
//   return {
//     type: types.SEARCH_TASK
//   };
// };
export const insertKeyword = keyword => {
  return {
    type: types.INSERT_KEYWORD,
    keyword
  };
};
export const sortAToZ = () => {
  return {
    type: types.A_TO_Z
  };
};
export const sortZToA = () => {
  return {
    type: types.Z_TO_A
  };
};
