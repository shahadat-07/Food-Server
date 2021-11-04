import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-5">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            Food Server
          </a>
          <span className="text-muted">© 2021 Food Server, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <Link to="#">
              <FaTwitter color="black" size="1.2rem" />{" "}
            </Link>
          </li>
          <li className="ms-3">
            <Link to="#">
              <FaLinkedinIn color="black" size="1.2rem" />
            </Link>
          </li>
          <li className="ms-3">
            <Link to="#">
              <FaFacebookF color="black" size="1.2rem" />
            </Link>
          </li>
          <li className="ms-3">
            <Link to="#">
              <FaInstagram color="black" size="1.2rem" />
            </Link>
          </li>
          <li className="ms-3">
            <Link to="#">
              <FaYoutube color="black" size="1.2rem" />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
