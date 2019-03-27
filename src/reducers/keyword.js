import * as types from "../constants/actionTypes";
const initialState = "";
const keyword = (state = initialState, action) => {
  switch (action.type) {
    case types.INSERT_KEYWORD:
      return action.keyword;
    default:
      return state;
  }
};
export default keyword;
