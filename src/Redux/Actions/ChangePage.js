import * as types from "../../Constants/index";
export const change_page = (index) => {
  return {
    type: types.CHANGE_PAGE,
    payload: {
      index: index,
    },
  };
};
