import React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
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
      </nav>
    </>
  );
};

export default Navbar;
