import React, { useState } from "react";
import Header from "../Shared Components/Header/Header";
import Footer from "./../Shared Components/Footer/Footer";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email, firstName, lastName, password);

  const newUser = async (event) => {
    event.preventDefault();

    const result = await fetch("http://localhost:3030/api/newUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        password,
      }),
    }).then((res) => res.json());
    alert(result.message);

    if (result.message === "sucessfull") {
      window.location.href = "/login";
    } else {
      window.location.href = "/signup";
    }
  };
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
          <div className="col-md-6">
            <form onSubmit={newUser}>
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

export default Registration;
