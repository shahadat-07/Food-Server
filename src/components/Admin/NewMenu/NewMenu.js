import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "./../../Shared Components/Header/Header";

const NewMenu = () => {
  return (
    <div class="container-fluid">
      <Header />
      <div className="row mt-5">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-6 mx-5">
          <h1 className="text-center mb-5">Add New Menu</h1>
          <form
            id="add_new"
            method="post"
            action="/add"
            enctype="multipart/form-data"
          >
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Category Name
              </label>
              <input
                type="text"
                name="categoryName"
                class="form-control"
                id=""
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Category Description
              </label>
              <input
                type="text"
                name="description"
                class="form-control"
                id=""
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Category Price
              </label>
              <input type="text" name="price" class="form-control" id="" />
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">
                Category Image
              </label>
              <input class="form-control" type="file" name="image" />
            </div>
            <button type="submit" class="btn btn-outline-dark">
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewMenu;
