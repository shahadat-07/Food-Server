/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Header from "../../Shared Components/Header/Header";
import Restaurants from "../Restaurants/Restaurants";

const NewMenu = () => {
  const [restaurants, setRestaurants] = useState([]);
  // console.log("from", restaurants);

  useEffect(() => {
    fetch(`http://localhost:3030/api/allRestaurants`)
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      });
  }, []);

  return (
    <section>
      <Header />
      <div className="container">
        <div className="row">
          {restaurants.map((restaurant) => (
            <Restaurants restaurant={restaurant}></Restaurants>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewMenu;
