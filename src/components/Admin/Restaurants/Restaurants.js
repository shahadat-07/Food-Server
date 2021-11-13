import React from "react";
import { FaClock } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { Link } from "react-router-dom";

const Restaurants = (props) => {
  const {
    restaurantName,
    restaurantAddress,
    operatingHours,
    priceLevel,
    restaurantImage,
  } = props.restaurant;
  const style = {
    marginBottom: "3px",
    marginRight: "5px",
  };
  // console.log(_id);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
      <img className="img-fluid" src={restaurantImage} alt="" />
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
      <Link to={`/newMenuForm/${restaurantName}`}>
        {" "}
        <button type="submit" className="btn btn-outline-dark mb-5">
          Add Menu To This Restaurant
        </button>
      </Link>
    </div>
  );
};

export default Restaurants;
