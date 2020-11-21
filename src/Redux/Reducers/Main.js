import { combineReducers } from "redux";
import Products from "./Products";
import Discover from "./Discover";
import Cart from "./Cart";
const appReducers = combineReducers({
  Products: Products,
  Discover: Discover,
  Cart: Cart,
});
export default appReducers;
