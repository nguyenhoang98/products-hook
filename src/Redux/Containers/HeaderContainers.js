import React from "react";
import Header from "../../Components/Header/Header";
import { compose } from "redux";
import { connect } from "react-redux";
import { filter_products } from "../Actions/Actions";
import PropTypes from "prop-types";

HeaderContainers.propTypes = {};

function HeaderContainers(props) {
  const { FilterProducts } = props;
  const { cart } = props;
  return <Header cart={cart} FilterProducts={FilterProducts} />;
}
const mapStateToProps = (state) => {
  return {
    cart: state.Cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    FilterProducts: (key) => {
      return dispatch(filter_products(key));
    },
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(
  HeaderContainers
);
