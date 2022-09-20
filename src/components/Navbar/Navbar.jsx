import React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/LOGO.svg"

const Navbar = () => {
  return (
    <>
      <nav>
      <div>
              <img src={Logo} alt="LOGO"
                  srcset="" className="logo"/>
          </div>

        <ul className="links">
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Contact
          </Link>
          <Link to="./booking" style={{ textDecoration: "none" }}>
            Booking
          </Link>
        </ul>
        <div >
              <button className="btn">Sign In</button>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
