import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./../../Shared Components/Header/Header";

const NewMenu = () => {
  return (
    <>
      <div class="container-fluid">
        <Header />
        <div className="row mt-5">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-6 mx-5">
            <h1 className="text-center mb-5">Add New Restaurant</h1>
            <form
              id="add_new"
              method="post"
              action="/add"
              enctype="multipart/form-data"
            >
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Restaurant Name
                </label>
                <input type="text" name="name" class="form-control" id="" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Restaurant Address
                </label>
                <input type="text" name="address" class="form-control" id="" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Operating Hours
                </label>
                <input
                  type="number"
                  name="costPerNight"
                  class="form-control"
                  id=""
                />
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Price Level
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>€</option>
                  <option>€€</option>
                  <option>€€€</option>
                  <option>€€€€</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Restaurant Type
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Buffet</option>
                  <option>Fast Food</option>
                  <option>Fast Casual</option>
                  <option>Casual Dining</option>
                  <option>Fine Dining</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Restaurant Scenario
                </label>
                <input class="form-control" type="file" name="image" />
              </div>
              <button type="submit" class="btn btn-outline-dark">
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
