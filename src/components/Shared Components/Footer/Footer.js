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
  const style = {
    position: "sticky",
    left: "0",
    bottom: "0",
    width: "100%",
    textAlign: "center",
  };
  return (
    <div>
      <footer
        style={style}
        className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-light mt-5"
      >
        <div className="col-md-4 d-flex align-items-center mx-5">
          <span className="text-muted">© 2021 Group28 Services, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-5">
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
