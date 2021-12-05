import axios from "axios";
import React, { useState } from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "./../../Shared Components/Header/Header";
import Sidebar from "./../Sidebar/Sidebar";

const NewRestaurant = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");
  const [operatingHours, setOperatingHours] = useState("");
  const [priceLevel, setPriceLevel] = useState("");
  const [restaurantType, setRestaurantType] = useState("");
  const [restaurantImage, setRestaurantImage] = useState("");
  const onChangeFile = (e) => {
    setRestaurantImage(e.target.files[0]);
  };

  //   console.log(restaurantImage);

  const newRestaurant = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("restaurantName", restaurantName);
    formData.append("restaurantAddress", restaurantAddress);
    formData.append("operatingHours", operatingHours);
    formData.append("priceLevel", priceLevel);
    formData.append("restaurantType", restaurantType);
    formData.append("restaurantImage", restaurantImage);

    axios
      .post("http://localhost:3030/api/user-profile", formData, {})
      .then((res) => {
        console.log(res);
      })
      .then((window.location.href = "/"));
  };

  return (
    <section>
      <Header />
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-6 mx-5">
            <h1 className="text-center mb-5">Add New Restaurant</h1>
            <form onSubmit={newRestaurant} enctype="multipart/form-data">
              <div className="mb-3">
                <label className="form-label">Restaurant Name</label> <br />
                <input
                  value={restaurantName}
                  className="form-control"
                  type="text"
                  name="restaurantName"
                  onChange={(e) => setRestaurantName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Restaurant Address</label> <br />
                <input
                  value={restaurantAddress}
                  className="form-control"
                  type="text"
                  name="restaurantAddress"
                  onChange={(e) => setRestaurantAddress(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Operating Hours</label> <br />
                <input
                  value={operatingHours}
                  className="form-control"
                  type="text"
                  name="operatingHours"
                  onChange={(e) => setOperatingHours(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price Level</label> <br />
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setPriceLevel(e.target.value)}
                >
                  <option selected>Select Level</option>
                  <option value="1">€</option>
                  <option value="2">€€</option>
                  <option value="3">€€€</option>
                  <option value="3">€€€€</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Restaurant Type</label> <br />
                <select
                  class="form-select"
                  onChange={(e) => setRestaurantType(e.target.value)}
                  aria-label="Default select example"
                >
                  <option selected>Select Type</option>
                  <option value="1">Buffet</option>
                  <option value="2">Fast Food</option>
                  <option value="3">Fast Casual</option>
                  <option value="3">Casual Dining</option>
                  <option value="3">Fine Dining</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="file" className="form-label">
                  Restaurant Image
                </label>{" "}
                <br />
                <input
                  className="form-control-file"
                  type="file"
                  filename="restaurantImage"
                  onChange={onChangeFile}
                />
              </div>

              <button type="submit" className="btn btn-outline-dark">
                {" "}
                Store in Database and Display
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default NewRestaurant;
