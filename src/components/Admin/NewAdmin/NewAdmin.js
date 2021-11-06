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
          <h1 className="text-center mb-5">Add Another Manager Here</h1>
          <form>
            <div className="contact_form__inputGroup">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="First Name"
                required
              />
              <br />
            </div>
            <div className="contact_form__inputGroup">
              <input
                type="text"
                className="form-control"
                id="surname"
                name="surname"
                placeholder="Last Name"
                required
              />
            </div>
            <br />
            <div className="contact_form__inputGroup">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <br />
            <div className="contact_form__inputGroup">
              <select class="form-select" aria-label="Default select example">
                <option selected>Manager</option>
              </select>
            </div>
            <br />
            <div className="contact_form__inputGroup">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <br />
            <button
              className="contact_form__submitBtn btn btn-outline-dark"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewMenu;
