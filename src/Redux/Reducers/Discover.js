import * as types from "../../Constants/index";

var initialState = [];
var reducer = (state = initialState, action) => {
  if (action.type === types.FETCH_API_DISPCOVER_SUCCESS) {
    const { data } = action.payload;
    state = data;
    return [...state];
  }
  if (action.type === types.FETCH_API_DISPCOVER_ERR) {
  }
  return state;
};
export default reducer;
