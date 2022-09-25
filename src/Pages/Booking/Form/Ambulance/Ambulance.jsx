import React from "react";
import Payment from "./Payment/Payment";

const Ambulance = ({ formData, setFormData }) => {
  return (
    <>
      {/* wrap this ambulance div in link tag and link it to the ambulance booked page */}
      <div className="ablulance-card">
        <img src="" alt="logo" />
        <div className="ambulance-name">AMBR Go</div>
        <div className="ambulance-type">
          Standard ambulance, fastest service
        </div>
        <div className="ambulance-price">Rs. 500</div>
        <div className="ambulance-time">15mins</div>
      </div>
      <div className="payment">
        <div className="payment-method">
          <img src="#" />
          Cash
        </div>
        <div className="payment-method">
          Change
          <span>
            <a href="#">
              <img src="#" />
            </a>
          </span>
        </div>
        <div className="payment-options">
          <Payment />
        </div>
      </div>
    </>
  );
};

export default Ambulance;
