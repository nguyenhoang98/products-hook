import React from "react";
import "./Home.scss";
import PropTypes from "prop-types";
Home.propTypes = {};

function Home(props) {
  return <div className="home">{props.children}</div>;
}

export default Home;
