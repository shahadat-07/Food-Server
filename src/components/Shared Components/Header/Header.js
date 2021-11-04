import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Logo.jpg";

const Header = () => {
  const style = { width: "140px", height: "80px" };
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between sticky-top bg-white border-bottom mx-4">
      <a
        href="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <img style={style} src={Logo} alt="" srcset="" />
      </a>

      <div className="text-end">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {/* <p
            className="nav-link text-dark dropdown-toggle mx-2"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            User
          </p>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                View Order Status
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                View Order History
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Log Out
              </a>
            </li>
          </ul> */}
          <li>
            <Link
              to="/login"
              className="nav-link link-dark h6 text-uppercase mt-3 mx-2"
            >
              <MdAccountCircle size="1.5em" color="#D70F64" /> Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
