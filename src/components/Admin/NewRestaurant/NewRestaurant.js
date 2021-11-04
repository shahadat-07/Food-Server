import React from "react";

const NewRestaurant = () => {
  return (
    <div class="container">
      {/* <AdminHeader /> */}
      <div>
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
            <input type="text" name="roomTitle" class="form-control" id="" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Restaurant Address
            </label>
            <input type="text" name="location" class="form-control" id="" />
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
            <label for="exampleInputEmail1" class="form-label">
              Description Of The Restaurant
            </label>
            <input type="text" name="description" class="form-control" id="" />
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Restaurant Scenario
            </label>
            <input class="form-control" type="file" name="image" />
          </div>
          <button type="submit" class="btn btn-primary">
            {" "}
            Store in Database and Display
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRestaurant;
