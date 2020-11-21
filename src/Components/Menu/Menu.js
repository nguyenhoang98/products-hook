import React from "react";
import "./Menu.scss";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
Menu.propTypes = {};

const MenuLink = ({ label, to, actionOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={actionOnlyWhenExact}
      children={(props) => {
        return (
          <li className={props.match ? "action" : ""}>
            <NavLink to={to}> {label} </NavLink>
          </li>
        );
      }}
    />
  );
};

const Menus = [
  {
    label: "Trang chủ",
    to: "/",
    actionOnlyWhenExact: true,
  },
  {
    label: "Contact",
    to: "/contact",
    actionOnlyWhenExact: false,
  },
];

function Menu(props) {
  return (
    <div className="menu clear">
      <ul>
        {Menus.map((value, index) => {
          return (
            <MenuLink
              label={value.label}
              to={value.to}
              actionOnlyWhenExact={value.actionOnlyWhenExact}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
