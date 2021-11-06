import React from "react";
import "./Promotion.css";

const Promotion = () => {
  // var myCarousel = document.querySelector("#myCarousel");
  // var carousel = new bootstrap.Carousel(myCarousel, {
  //   interval: 2000,
  //   wrap: false,
  // });

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div id="c1" className="carousel-item active" data-bs-interval="5000">
          {/* <img src={promotion1} className={classes.carousel} alt="..." /> */}
          {/* <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div> */}
        </div>
        <div id="c2" className="carousel-item" data-bs-interval="5000">
          {/* <img src={promotion2} className={classes.carousel} alt="..." /> */}
          {/* <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div> */}
        </div>
        <div id="c3" className="carousel-item" data-bs-interval="5000">
          {/* <img src={promotion3} className={classes.carousel} alt="..." /> */}
          {/* <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div> */}
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Promotion;
