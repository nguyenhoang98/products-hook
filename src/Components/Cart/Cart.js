import React from "react";
import "./Cart.scss";
import PropTypes from "prop-types";

Cart.propTypes = {};

function Cart(props) {
  const { cartProducts, updateProductCart } = props;
  return (
    <div className="cart m-t">
      <table className="cart__table">
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tên</th>
            <th>Mô Tả</th>
            <th>Số Lượng</th>
            <th>Giá</th>
            <th>Thành Tiền</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((value, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={value.product.src}
                    alt={value.product.name}
                    className="cart__table__image"
                  />
                </td>
                <td> {value.product.name} </td>
                <td> {value.product.description} </td>
                <td>
                  <button
                    onClick={() => updateProductCart(value.product.id, -1)}
                  >
                    -
                  </button>
                  {value.quantity}
                  <button
                    onClick={() => updateProductCart(value.product.id, 1)}
                  >
                    +
                  </button>
                </td>
                <td>
                  {" "}
                  {value.product.price}
                  <sup>đ</sup>{" "}
                </td>
                <td>
                  {" "}
                  {value.quantity * value.product.price} <sup>đ</sup>{" "}
                </td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Tổng Tiền</td>
            <td>
              {" "}
              {cartProducts.reduce((total, value) => {
                return total + value.product.price * value.quantity;
              }, 0)}{" "}
              <sup>đ</sup>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
