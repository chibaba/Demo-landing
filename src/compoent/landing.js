import React, { Component } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../image/image1.jpeg";
import image2 from "../image/image2.jpeg";
import image3 from "../image/image3.jpeg";
import "./landing.css";

const images = [
  {
    id: 1,
    desciption: "We are passionate about the people",
    details: "creating an exceptional experience for every nigerian",
    url: image1,
  },
  {
    id: 2,
    desciption: "WE ARE PASSIONATE ABOUT THE SOCIETY",
    details:
      "Whether we are building anything we are creating something that will empower  the society for greater change",
    url: image2,
  },
  {
    id: 3,
    desciption: "WE ARE PASSIONATE ABOUT WHAT WE DO",
    details:
      "Delivering oil and gas to every household in Nigeria is possible thats why we are creating a value with th at",
    url: image3,
  },
];
class Landing extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      slidesToScroll: 1,
      arrows: true,

      className: "slides",
    };
    return (
      <div className="App" style={{ padding: 24 }}>
        <Slider {...settings}>
          {images.map((id) => {
            return (
              <div className="fully-cover">
                <img width="100%" src={id.url} alt="images" />
                <h1 className="app">{id.desciption}</h1>
                <h4 className="app1">{id.details}</h4>
                <h3 className="social-icons">
                  <Link to="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-github"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </h3>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Landing;
