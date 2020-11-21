import React from "react";
import "./HomeSlider.scss";
import Slider from "react-slick";
import "../../slick/slick-theme.scss";
import "../../slick/slick.scss";
import banner_1 from "../../acssets/Image/banner-01.jpg";
import banner_2 from "../../acssets/Image/banner02.jpg";
import banner_3 from "../../acssets/Image/banner03.jpg";
import banner_4 from "../../acssets/Image/banner04.jpg";
import banner_5 from "../../acssets/Image/banner05.jpg";
import banner_6 from "../../acssets/Image/banner06.png";
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function HomeSlider(props) {
  return (
    <div className="homeslider r-8 m-t row">
      <div className="homeslider__left cl-2-of-3">
        <Slider {...settings}>
          <div className="homeslider__left__item">
            <img
              src={banner_1}
              className="homeslider__left__item__image"
              alt="banner 1"
            />
          </div>
          <div className="homeslider__left__item">
            <img
              src={banner_2}
              className="homeslider__left__item__image"
              alt="banner 2"
            />
          </div>
          <div className="homeslider__left__item__image">
            <img
              src={banner_3}
              className="homeslider__left__item__image"
              alt="banner 3"
            />
          </div>
          <div className="homeslider__content__left__item">
            <img
              src={banner_4}
              className="homeslider__left__item__image"
              alt="banner 4"
            />
          </div>
          <div className="homeslider__content__left__item">
            <img
              src={banner_5}
              className="homeslider__left__item__image"
              alt="banner 5"
            />
          </div>
        </Slider>
      </div>
      <div className="homeslider__right cl-1-of-3">
        <div>
          <img src={banner_1} className="homeslider__right__item__image" />
        </div>
        <div>
          <img src={banner_2} className="homeslider__right__item__image" />
        </div>
      </div>
    </div>
  );
}
export default HomeSlider;
