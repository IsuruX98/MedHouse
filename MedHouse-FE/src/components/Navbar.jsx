import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import navUserIcon from "../assets/nav_user_icon.svg";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/adminpage") {
    return null; // Hide Navbar for paths "/" and "/adminpage"
  }

  if (
    location.pathname === "/home" ||
    location.pathname === "/services" ||
    location.pathname === "/about"
  ) {
    return (
      <header className="nav-bar-container">
        <nav className="nav-bar">
          <Link className="logo" to="/home">
            <span style={{ color: "#FF4500" }}>MED</span>
            <span style={{ color: "#00FFFF" }}>HOUSE</span>
          </Link>
          <ul>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/checkout">CHECKOUT</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
          </ul>
          <img src={navUserIcon} alt="Account Icon" />
        </nav>
      </header>
    );
  }
};

export default Navbar;
