import * as types from "../constants/actionTypes";

const initialState = {};
const taskRepair = (state = initialState, action) => {
  switch (action.type) {
    case types.REPAIR_TASK:
      return action.task;
    default:
      return state;
  }
};
export default taskRepair;
