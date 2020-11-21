import React from "react";
import Cart from "../../Components/Cart/Cart";
import { compose } from "redux";
import { connect } from "react-redux";
import { update_to_cart } from "../Actions/Actions";
import PropTypes from "prop-types";

CartContainers.propTypes = {};

function CartContainers(props) {
  const { cartProducts, updateProductCart } = props;
  return (
    <Cart cartProducts={cartProducts} updateProductCart={updateProductCart} />
  );
}
const mapStateToProps = (state) => {
  return {
    cartProducts: state.Cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateProductCart: (id, quantity) => {
      return dispatch(update_to_cart(id, quantity));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  CartContainers
);
