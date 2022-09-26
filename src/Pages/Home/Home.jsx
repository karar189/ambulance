import React from "react";
import "./style.css";
import car from "../../assets/ambuu.svg";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import gif1 from "../../assets/498-ambulance-flat.gif";

const Home = () => {
  return (
    <>
      <div className="section-hero">
        <div className="hero-data">
          <div className="container grid grid-two-column">
            {" "}
            <h1 class="primary-heading">
              Fastest Way you can book an <br /> ambulance
            </h1>
          </div>
          <div className="secondary-heading">
            <div className="grid grid-two-column">
              <div className="hero-icon-style  icon"> </div>
              <h2>One stop solution for your health emergencies</h2>
            </div>

            <div>
              <Link to="./booking" style={{ textDecoration: "none" }}>
                <button class="Acc-btn">
                  <div className="Inside-button">Book Now</div>
                </button>
              </Link>
            </div>
            <div className="ambulance-animation">
              <div className="car">
                {/* <img src={car} className="car1" /> */}
                <img
                  src={gif1}
                  style={{ height: "300px", width: "300px", zIndex: "-99" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
