import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        Food Server
      </a>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        {/* <li>
          <Link to="/newRestaurant" className="nav-link px-2 link-secondary">
            New Restaurant
          </Link>
        </li> */}
        <li>
          <Link to="/newMenu" className="nav-link px-2 link-secondary">
            New Menu
          </Link>
        </li>
      </ul>
      <div className="col-md-4 text-end">
        <button type="button" className="btn btn-dark">
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
