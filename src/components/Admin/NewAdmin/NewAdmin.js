import axios from "axios";
import React, { useState } from "react";
import Footer from "../../Shared Components/Footer/Footer";
import Header from "../../Shared Components/Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const NewAdmin = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, firstName, lastName, password);

  const newAdmin = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("password", password);

    axios
      .post("http://localhost:3030/api/newAdmin", {
        email,
        firstName,
        lastName,
        password,
      })
      .then((res) => {
        console.log(res);
      });
    // .then((window.location.href = "/signup"));
  };

  return (
    <section>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-6">
            <div className="text-center my-4">
              <h2>Welcome!</h2>
              <p>Sign up to continue</p>
            </div>
            <form onSubmit={newAdmin}>
              <div className="">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
              </div>

              <div className="">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <br />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <br />
              </div>
              <div className="">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br />
              </div>
              <button className="btn btn-block btn-danger" type="submit">
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

export default NewAdmin;
