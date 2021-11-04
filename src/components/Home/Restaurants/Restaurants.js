import React from "react";
import image from "../../../assets/images/R-1.jpg";

const Restaurants = () => {
  return (
    <div className="">
      <img className="img-fluid" src={image} alt="" />
      <div className="d-flex justify-content-between mt-4">
        <h5>Momo Hut - Safe Food</h5>
        <p>0/5</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        voluptas perspiciatis nostrum odit ab quos voluptate alias labore
        officia similique!
      </p>
    </div>
  );
};

export default Restaurants;
