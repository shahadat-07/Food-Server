import React from "react";
import { FaLock, FaUserCog } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import appLogo from "../../../assets/images/app_logo.png";

const Header = () => {
  const data = localStorage.getItem("currentLoggedIn");
  const user = JSON.parse(data);
  // console.log(user);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const style = { width: "140px", height: "80px" };
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between sticky-top bg-white border-bottom mx-4">
      <a
        href="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <img style={style} src={appLogo} alt="" srcset="" />
      </a>

      <div className="text-end">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {/* condition ? exprIfTrue : exprIfFalse */}
          <li className="nav-link link-dark h6 text-uppercase mt-3 mx-2">
            <MdAccountCircle size="1.5em" color="#D70F64" />{" "}
            {user ? user.firstName + " " + user.lastName : "GUEST USER"}
          </li>
          {user && user.role === "admin" ? (
            <>
              <li>
                <Link
                  to="/admin"
                  className="nav-link link-dark h6 text-uppercase mt-3 mx-2"
                >
                  <FaUserCog size="1.5em" color="#D70F64" /> Admin
                </Link>
              </li>
            </>
          ) : (
            <></>
          )}
          {user ? (
            <>
              <li
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
                className="nav-link link-dark h6 text-uppercase mt-3 mx-2"
              >
                <FaLock size="1.2em" color="#D70F64" /> Logout
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <Link
                  to="/login"
                  className="nav-link link-dark h6 text-uppercase mt-3 mx-2"
                >
                  <MdAccountCircle size="1.5em" color="#D70F64" /> Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
