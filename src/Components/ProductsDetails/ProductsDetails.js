import React, { useState } from "react";
import "./ProductsDetails.scss";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
ProductsDetails.propTypes = {};

function ProductsDetails(props) {
  const { ProductAddToCart } = props;
  const [quantity, setQuantity] = useState(1);
  const { location } = props;
  const { state } = location;
  function changeQuantity(index) {
    setQuantity(quantity + index);
  }
  function onProductAddToCart(product) {
    ProductAddToCart(product, quantity);
  }
  return (
    <div className="productsdetails">
      <div className="row r-8 m-t ">
        <div className="productsdetails__left cl-1-of-3">
          <img
            src={state.src}
            alt={state.name}
            className="productsdetails__left__image"
          />
        </div>
        <div className="productsdetails__right cl-2-of-3">
          <span className="like">Yêu Thích</span> &nbsp;
          <div className="productsdetails__description">
            {state.description}
          </div>
          <div className="productsdetails__price">
            Giá Sản Phẩm : {state.price}
            <sup>đ</sup>
          </div>
          <div className="productsdetails__quantity">
            Số Lượng Sản Phẩm :
            <button onClick={() => changeQuantity(-1)}>-</button>
            {quantity}
            <button onClick={() => changeQuantity(1)}>+</button>
          </div>
          <div className="productsdetails__control m-t">
            <button
              className="btn btn--addtocart"
              onClick={() => onProductAddToCart(state)}
            >
              <i className="fa fa-cart-plus" aria-hidden="true"></i>
              &nbsp; Thêm Vào giỏ Hàng
            </button>
            <button className="btn btn--shop">
              <i className="fa fa-cart-plus" aria-hidden="true"></i>
              &nbsp; Mua Hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default compose(withRouter)(ProductsDetails);
