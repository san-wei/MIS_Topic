/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };
  return (
      <div id="navbarBasicExample"  >
        <Slider {...settings}>
          <div  >
            <Link to="/atayal">泰雅族</Link>
          </div>
          <div >
            <Link to="/pangcah">阿美族</Link>
          </div>
          <div >
            <Link to="/paiwan">排灣族</Link>
          </div>
          <div > 
           <Link to="/bunun">布農族</Link>
          </div>
          <div >
            <Link to="/puyuma">卑南族</Link>
          </div>
          <div >
            <Link to="/rukai">魯凱族</Link>
          </div>
        </Slider>
      </div>
    );
  }
}