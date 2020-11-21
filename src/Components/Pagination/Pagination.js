import React, { useEffect, useRef, useState } from "react";
import "./Pagination.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

Pagination.propTypes = {};

function Pagination(props) {
  const value = useRef(true);
  const { handleChangePage } = props;
  useEffect(() => {});
  function onHandleChangePage_1(index) {
    value.current = true;
    handleChangePage(index);
  }
  function onHandleChangePage_2(index) {
    value.current = false;
    handleChangePage(index);
  }
  return (
    <div className="pagination r-8">
      <button
        className={classNames("btn pagination__one", {
          pagination__btn: value.current === true,
        })}
        onClick={() => onHandleChangePage_1(1)}
      >
        1
      </button>
      <button
        className={classNames("btn pagination__two", {
          pagination__btn: value.current === false,
        })}
        onClick={() => onHandleChangePage_2(2)}
      >
        2
      </button>
    </div>
  );
}

export default Pagination;
