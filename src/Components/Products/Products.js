import React from "react";
import "./Products.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import PropTypes from "prop-types";
Products.propTypes = {};
AOS.init();
function Products(props) {
  const { products } = props;
  return (
    <div className="products clear">
      <div className="products__list row">
        {products.map((product, index) => {
          return (
            <div
              className="products__list__item cl-1-of-4 box-shadow"
              key={index}
              data-aos="fade-up"
            >
              <Link
                to={{
                  pathname: `products-details/${product.name}`,
                  state: product,
                }}
              >
                <div className="products__list__item__content">
                  <div className="products__list__item__content__image">
                    <img
                      src={product.src}
                      alt={product.name}
                      className="image"
                    />
                  </div>
                  <div className="products__list__item__content__title">
                    {product.name}
                  </div>
                  <div className="products__list__item__content__cart">
                    <button className="btn btn--cart">
                      <span
                        style={{
                          fontSize: 17,
                        }}
                      >
                        Mua Hàng
                      </span>
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
