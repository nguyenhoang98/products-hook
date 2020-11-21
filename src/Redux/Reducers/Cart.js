import * as types from "../../Constants/index";
var data = JSON.parse(localStorage.getItem("cart"));
var initialState = data ? data : [];

var reducer = (state = initialState, action) => {
  if (action.type === types.ADD_TO_CART_SUCCESS) {
    const { product, quantity } = action.payload;
    let index = state.findIndex((value) => {
      return value.product.id === product.id;
    });
    if (index !== -1) {
      state[index].quantity += 1;
    } else {
      state.push({
        product: product,
        quantity: quantity,
      });
    }
    localStorage.setItem("cart", JSON.stringify(state));
    return [...state];
  }
  if (action.type === types.UPDATE_TO_CART) {
    const { id, quantity } = action.payload;
    let index = state.findIndex((value) => {
      return value.product.id === id;
    });
    state[index].quantity += quantity;
    if (state[index].quantity < 0) {
      state.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(state));
    return [...state];
  }
  return state;
};
export default reducer;
