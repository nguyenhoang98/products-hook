import * as types from "../../Constants/index";
var initialState = [];
var reducer = (state = initialState, action) => {
  if (action.type === types.FETCH_API_PRODUCTS_SUCCESS) {
    const { data } = action.payload;
    state = data;
    return [...state];
  }
  return state;
};
export default reducer;
