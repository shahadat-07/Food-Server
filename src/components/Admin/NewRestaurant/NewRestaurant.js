import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./../../Shared Components/Header/Header";

const NewMenu = () => {
  // const form = document.getElementById("newRestaurant");
  // form.addEventListener("submit", newRestaurant);

  async function newRestaurant(event) {
    event.preventDefault();
    const restaurantName = document.getElementById("restaurantName").value;
    const restaurantAddress =
      document.getElementById("restaurantAddress").value;
    const operatingHours = document.getElementById("operatingHours").value;
    const priceLevel = document.getElementById("priceLevel").value;
    const restaurantType = document.getElementById("restaurantType").value;

    // console.log(
    //   restaurantName,
    //   restaurantAddress,
    //   operatingHours,
    //   priceLevel,
    //   restaurantType
    // );

    const result = await fetch("http://localhost:3030/addRestaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        restaurantName,
        restaurantAddress,
        operatingHours,
        priceLevel,
        restaurantType,
      }),
    }).then((res) => res.json());
    if (result.status === "Successfull") {
      alert("New Restaurant Added Successfully");
      window.location.href = "/";
    }
  }

  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-6 mx-5">
            <h1 className="text-center mb-5">Add New Restaurant</h1>
            <form
              // id="newRestaurant"
              onSubmit={newRestaurant}
              // enctype="multipart/form-data"
            >
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  name="restaurantName"
                  id="restaurantName"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Restaurant Address
                </label>
                <input
                  type="text"
                  name="restaurantAddress"
                  className="form-control"
                  id="restaurantAddress"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Operating Hours
                </label>
                <input
                  type="number"
                  name="operatingHours"
                  className="form-control"
                  id="operatingHours"
                />
              </div>
              <div className="mb-3">
                <label for="formFile" className="form-label">
                  Price Level
                </label>
                <select
                  className="form-select"
                  name="priceLevel"
                  id="priceLevel"
                  aria-label="Default select example"
                >
                  <option selected>€</option>
                  <option>€€</option>
                  <option>€€€</option>
                  <option>€€€€</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="formFile" className="form-label">
                  Restaurant Type
                </label>
                <select
                  className="form-select"
                  name="restaurantType"
                  id="restaurantType"
                  aria-label="Default select example"
                >
                  <option selected>Buffet</option>
                  <option>Fast Food</option>
                  <option>Fast Casual</option>
                  <option>Casual Dining</option>
                  <option>Fine Dining</option>
                </select>
              </div>
              {/* <div className="mb-3">
                <label for="formFile" className="form-label">
                  Restaurant Scenario
                </label>
                <input className="form-control" type="file" name="image" />
              </div> */}
              <button type="submit" className="btn btn-outline-dark">
                {" "}
                Store in Database and Display
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMenu;
