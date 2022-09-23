import React from "react";
import Form from "./Form/Form";
import Map from "./Map/Map";
import "./style.css";

const Booking = () => {
  return (
    <>
      <div className="booking">
        <div className="container-map">
          <Map />
        </div>
        <div className="container-form">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Booking;
