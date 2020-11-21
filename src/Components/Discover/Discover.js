import React from "react";
import "./Discover.scss";
import AOS from "aos";
import PropTypes from "prop-types";
AOS.init();
Discover.propTypes = {};
function Discover(props) {
  const { discover } = props;
  return (
    <div className="discover row r-8 m-t">
      {discover.map((value, index) => {
        return (
          <div
            className="discover__item box-shadow cl-1-of-4"
            key={index}
            data-aos="zoom-in"
          >
            <img
              src={value.src}
              alt={value.title}
              className="discover__item__image"
            />
            <div className="discover__item__title">{value.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Discover;
