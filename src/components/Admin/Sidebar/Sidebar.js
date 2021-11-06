import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
      <span className="fs-4">Welcome, User</span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/newRestaurant"
            className="nav-link link-dark"
            aria-current="page"
          >
            Add New Restaurant
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/newMenu"
            className="nav-link link-dark"
            aria-current="page"
          >
            Add Restaurant Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/newAdmin"
            className="nav-link link-dark"
            aria-current="page"
          >
            Add New Admin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
