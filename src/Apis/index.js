import AxiosServices from "../AxiosServices/index";
import qs from "query-string";
export const getProducts = (url, params = {}) => {
  let querystring = "";
  if (Object.keys(params)) {
    querystring = qs.stringify(params);
    console.log(querystring);
  }
  console.log(params);
  return AxiosServices.get(`${url}&${querystring}`);
};

export const getDiscover = (url) => {
  return AxiosServices.get(`${url}`);
};
