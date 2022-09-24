import React from "react";
import Form from "./Form/Form";
import MapBoxL from "./MapboxL/MapBoxL";
import "./style.css";

const Booking = () => {
  return (
    <>
      <div className="booking">
        <div className="container-map">
          <MapBoxL />
        </div>
        <div className="container-form">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Booking;
