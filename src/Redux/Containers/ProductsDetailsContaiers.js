import React from "react";
import ProductsDetails from "../../Components/ProductsDetails/ProductsDetails";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { add_to_cart_success } from "../../Redux/Actions/Actions";
ProductsDetailsContaiers.propTypes = {};

function ProductsDetailsContaiers(props) {
  return <ProductsDetails ProductAddToCart={props.ProductAddToCart} />;
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    ProductAddToCart: (product, quantity) => {
      return dispatch(add_to_cart_success(product, quantity));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  ProductsDetailsContaiers
);
