import React from "react";
import { FaClock } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { Link } from "react-router-dom";

const Restaurants = (props) => {
  const style = {
    marginBottom: "3px",
    marginRight: "5px",
  };
  const {
    restaurantName,
    restaurantAddress,
    operatingHours,
    priceLevel,
    restaurantImage,
  } = props.restaurant;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link
        className="nav-link link-dark"
        to={`/displayMenus/${restaurantName}`}
      >
        <img
          className="img-fluid"
          srcSet={restaurantImage}
          alt="Restaurant Scenary"
        />
        <div className="mt-4 d-flex justify-content-between">
          <h5>{restaurantName}</h5>
          <p>
            <MdPriceChange color="#C60D5C" style={style} size="20px" />
            {priceLevel}
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p>{restaurantAddress}</p>
          <p>
            <FaClock color="#C60D5C" style={style} />
            {operatingHours} Hours
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Restaurants;
