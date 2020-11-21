import React, { useEffect, useState } from "react";
import Home from "../../Components/Home/Home";
import Products from "../../Components/Products/Products";
import { connect } from "react-redux";
import { fetch_api_products, fetch_api_discover } from "../Actions/Actions";
import { change_page } from "../Actions/ChangePage";
import PropTypes from "prop-types";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import Discover from "../../Components/Discover/Discover";
import Pagination from "../../Components/Pagination/Pagination";

HomeContainers.propTypes = {};

function HomeContainers(props) {
  const [Page, setPage] = useState(1);
  const {
    fetchApiProducts,
    fetchApiDiscover,
    products,
    discover,
    onchangePage,
  } = props;
  useEffect(() => {
    console.log("B");
    fetchApiDiscover();
  }, []);
  useEffect(() => {
    // Gọi Api
    console.log("Gọi Api Products");
    fetchApiProducts();
  }, [Page]);
  function handleChangePage(index) {
    setPage(index);
    onchangePage(index);
  }
  return (
    <Home>
      <HomeSlider />
      <Discover discover={discover} />
      <Products products={products} />
      <Pagination handleChangePage={handleChangePage} />
    </Home>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.Products,
    discover: state.Discover,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiProducts: () => {
      return dispatch(fetch_api_products());
    },
    fetchApiDiscover: () => {
      return dispatch(fetch_api_discover());
    },
    onchangePage: (index) => {
      return dispatch(change_page(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainers);
