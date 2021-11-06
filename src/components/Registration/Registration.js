import React from "react";
import Header from "../Shared Components/Header/Header";
import Footer from "./../Shared Components/Footer/Footer";

const Registration = () => {
  return (
    <section>
      <Header />
      <div className="container">
        <div className="row">
          <div className="text-center my-4">
            <h2>Welcome!</h2>
            <p>Sign up to continue</p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-6 contact_form">
            <form>
              <div className="contact_form__inputGroup">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <br />
              </div>
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
              <input
                type="password"
                name="password"
                id="password"
                className="form-control mt-3 font"
                placeholder="Create Password"
                required
              />
              <br />
              <button
                className="contact_form__submitBtn btn btn-block btn-danger"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Registration;
