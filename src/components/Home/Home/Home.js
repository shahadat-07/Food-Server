import React from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";
import Promotion from "../Promotion/Promotion";
import Restaurants from "../Restaurants/Restaurants";

const Home = () => {
  return (
    <section>
      <Header />
      <div className="container">
        <Promotion />
        <h3 className="text-secondary mt-5 pt-5">Popular Restaurant</h3>
        <div className="row">
          <div className="col-md-3">
            <Restaurants />
          </div>
          <div className="col-md-3">
            <Restaurants />
          </div>
          <div className="col-md-3">
            <Restaurants />
          </div>
          <div className="col-md-3">
            <Restaurants />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Restaurants />
          </div>
          <div className="col-md-3">
            <Restaurants />
          </div>
          <div className="col-md-3">
            <Restaurants />
          </div>
          <div className="col-md-3">
            <Restaurants />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
