import * as types from "../../Constants/index";

export const fetch_api_products = (params = {}) => {
  console.log("Chạy");
  return {
    type: types.FETCH_API_PRODUCTS,
    payload: {
      query: params,
    },
  };
};

export const fetch_api_products_succcess = (data) => {
  return {
    type: types.FETCH_API_PRODUCTS_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const fetch_api_products_err = (err) => {
  return {
    type: types.FETCH_API_PRODUCTS_ERR,
    payload: {
      err: err,
    },
  };
};

export const fetch_api_discover = () => {
  return {
    type: types.FETCH_API_DISPCOVER,
  };
};

export const fetch_api_discover_succsess = (data) => {
  return {
    type: types.FETCH_API_DISPCOVER_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const fetch_api_discover_err = (err) => {
  return {
    type: types.FETCH_API_PRODUCTS_ERR,
    payload: {
      err: err,
    },
  };
};

export const add_to_cart_success = (product, quantity) => {
  return {
    type: types.ADD_TO_CART_SUCCESS,
    payload: {
      product: product,
      quantity: quantity,
    },
  };
};

export const add_to_cart_err = (err) => {
  return {
    type: types.ADD_TO_CART_ERR,
    payload: {
      err: err,
    },
  };
};

export const update_to_cart = (id, quantity) => {
  return {
    type: types.UPDATE_TO_CART,
    payload: {
      id: id,
      quantity: quantity,
    },
  };
};

export const filter_products = (key) => {
  return {
    type: types.FILTER_PRODUCTS,
    payload: {
      key: key,
    },
  };
};
