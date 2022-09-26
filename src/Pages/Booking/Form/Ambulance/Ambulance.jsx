import React from "react";
import Payment from "./Payment/Payment";
import "./style.css";
import Logogo from "../../../../assets/ambulance-go.svg";
import Logoex from "../../../../assets/ambulance-excel.svg";
// import Logoplus from "../../../../assets/ambulance-plus.svg";

const Ambulance = ({ formData, setFormData }) => {
  return (
    <>
      {/* wrap this ambulance div in link tag and link it to the ambulance booked page */}
      <div className="ablulance-card">
        <div className="ambrgo">
          <img src={Logogo} alt="Logogo" />
          <div className="ambrgo2">
            <div className="name-type">
            <div className="ambulance-name">AMBR Go</div>
            <br></br>
            <div className="ambulance-type">
              Standard ambulance, fastest service
            </div>
            </div>
            </div>
          <div className="ambulance-price">Rs. 500</div>
          <div className="ambulance-time">30mins</div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="ablulance-card-2">
        <div className="ambrgo-2">
          <img src={Logoex} alt="Logoex" />
          <div className="ambrgo2">
            <div className="name-type">
            <div className="ambulance-name">AMBR excel</div>
            <br></br>
            <div className="ambulance-type">
             Trained helper, O2 facility.
            </div>
            </div>
            </div>
          <div className="ambulance-price">Rs. 1500</div>
          <div className="ambulance-time">20mins</div>
        </div>
      </div>
     
      <br></br>
      <br></br>
      <br></br>
      <div className="ablulance-card-3">
        <div className="ambrgo-3">
        <img src={Logoex} alt="Logoex" />
          <div className="ambrgo2">
            <div className="name-type">
            <div className="ambulance-name">AMBR plus</div>
            <br></br>
            <div className="ambulance-type">
             O2 & blood transfer facility.
            </div>
            </div>
            </div>
          <div className="ambulance-price">Rs. 5000</div>
          <div className="ambulance-time">15mins</div>
        </div>
      </div>
     

      {/* <div className="payment">
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
      </div> */}
    </>
  );
};

export default Ambulance;
