import React, { useEffect, useState } from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";
import Promotion from "../Promotion/Promotion";
import Restaurants from "../Restaurants/Restaurants";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:3030/api/allRestaurants?search=` + filter)
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      });
  }, [filter]);

  return (
    <section>
      <Header />
      <div className="container">
        <Promotion />
        <h3 className="text-secondary my-3 pt-5">Popular Restaurant</h3>
        <input
          placeholder="Search for your favourite restaurant here"
          type="search"
          className="form-control mb-5"
          onChange={handleFilter}
        />
        <div className="row">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <Restaurants
                key={restaurant._id}
                restaurant={restaurant}
              ></Restaurants>
            ))
          ) : (
            <h1 className="text-center my-5">No Restaurant Found</h1>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
