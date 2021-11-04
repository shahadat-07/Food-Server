import React from "react";
import Header from "../Shared Components/Header/Header";

const Registration = () => {
  return (
    <section>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 contact_form">
            <form action="/sendemail" method="POST">
              <h5 className="py-3 text-center">
                {" "}
                Sign up with{" "}
                <a href="#" className="social-link">
                  Facebook
                </a>{" "}
                or{" "}
                <a href="#" className="social-link">
                  Google
                </a>{" "}
              </h5>
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
                <br />
              </div>
              <select className="form-control" name="role" id="role">
                <option value="regular">Regular</option>
                <option value="admin">Admin</option>
              </select>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control mt-3 font"
                placeholder="Create Password"
                required
              />
              <br />
              <p className="text-danger" id="password-err">
                password should be within 6 to 12 characters and the password
                must have at least one uppercase letter, one lowercase letter,
                one number and one special character
              </p>
              <p className="text-secondary text-left">
                We'll send you marketing promotions,special offer,promotion and
                policy update via email.
              </p>
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
    </section>
  );
};

export default Registration;
