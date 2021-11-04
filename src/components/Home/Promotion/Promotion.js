import React from "react";
// import image from '../../../assets/images/promotion.webp'
import classes from "./Promotion.module.css";

const Promotion = () => {
  return (
    <div className="my-5">
      <h3 className="text-secondary">Take your office out to lunch</h3>
      <div className={`${classes.promotion}`}></div>
    </div>
  );
};

export default Promotion;
