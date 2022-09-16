import React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="./booking">Booking</Link>
      </nav>
    </>
  );
};

export default Navbar;
