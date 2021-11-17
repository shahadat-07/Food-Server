import React, { useEffect, useState } from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";
import Promotion from "../Promotion/Promotion";
import Restaurants from "../Restaurants/Restaurants";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants);

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
        <Promotion />
        <h3 className="text-secondary mt-5 pt-5">Popular Restaurant</h3>
        <div className="row">
          {restaurants.map((restaurant) => (
            <Restaurants restaurant={restaurant}></Restaurants>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
