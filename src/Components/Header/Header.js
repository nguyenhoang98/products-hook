import React, { useState } from "react";
import "./Header.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";
import Menu from "../Menu/Menu";
Header.propTypes = {};

function Header(props) {
  const [value, setValue] = useState("");
  const { cart, FilterProducts } = props;
  function onToggleMenuBar() {
    console.log("Toggle");
    document
      .getElementsByClassName("header__nav__right")[0]
      .classList.toggle("toggleBar");
  }
  function handleOnchange(e) {
    setValue(e.target.value);
    FilterProducts(e.target.value);
  }
  return (
    <div className="header">
      <div className="header__nav clear r-8">
        <div className="header__nav__left">
          <ul>
            <li>
              {" "}
              <Link to="javascript:void(0)">Người Bán hàng</Link>{" "}
            </li>{" "}
            <li>
              {" "}
              <Link to="javascript:void(0)">Tải ứng dụng </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="javascript:void(0)">Kết nối</Link>{" "}
            </li>
            <li>
              <Link to="javascript:void(0)">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </Link>
              <Link to="javascript:void(0)">
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="header__nav__right">
          <ul>
            <li>
              {" "}
              <Link to="javascript:void(0)">Thông Báo</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="javascript:void(0)">Trợ Giúp</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="javascript:void(0)">Đăng Kí</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="javascript:void(0)">Đăng Nhập</Link>{" "}
            </li>
            <li>
              <button className="btn btn-bar" onClick={onToggleMenuBar}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="header__navbar row r-8 clear">
        <div className="header__navbar__logo cl-1-of-5">
          <img src={logo} alt="logo" className="header__navbar__logo__image" />
        </div>
        <div className="header__navbar__control cl-3-of-5">
          <input
            type="text"
            className="header__navbar__control__input"
            placeholder="Mua Sắm Thỏa Thích - Giảm Giá 20% Các Loại Sản Phẩm"
            onChange={handleOnchange}
            value={value}
          />
          <button className="btn btn--search">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
          <Menu />
        </div>
        <Link to="/cart">
          <div className="header__navbar__cart cl-1-of-5">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className="header__navbar__cart__length">
              {" "}
              {cart.length}{" "}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
