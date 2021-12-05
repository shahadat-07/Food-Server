import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Shared Components/Header/Header";
import Footer from "./../Shared Components/Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const login = async (event) => {
    event.preventDefault();
    let from = location.state?.from?.pathname || "/";

    const result = await fetch("http://localhost:3030/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
    navigate(from, { replace: true });
    alert(result.message);
    const user = result.user;
    if (user) {
      if (user.role === "admin") {
        localStorage.setItem("currentLoggedIn", JSON.stringify(user));
        window.location.href = "/admin";
      } else if (user.role === "user") {
        localStorage.setItem("currentLoggedIn", JSON.stringify(user));
        // window.location.href = "/";
        // navigate(from, { replace: true });
      }
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <section>
      <Header />
      <div className="container">
        <div className="row">
          <div className="text-center my-4">
            <h2>Welcome!</h2>
            <p>Login to continue</p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form onSubmit={login}>
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
                Login
              </button>
              <br />
              <br />
              <div className="">
                <p>Haven't and Account Yet!</p>{" "}
                <Link className="" to="/signup">
                  <b>Click Here</b>
                </Link>
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
