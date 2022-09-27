import React from "react";
import Payment from "./Payment/Payment";
import "./style.css";
import Logogo from "../../../../assets/ambulance-go.svg";
import Logoex from "../../../../assets/ambulance-excel.svg";
// import Logoplus from "../../../../assets/ambulance-plus.svg";

const Ambulance = ({ formData, setFormData }) => {
  const ambulanceList = [
    {
      name: "Ambulance Go",
      rating: 4.5,
      time: 10,
      price: 1000,
      img: Logogo,
    },
    {
      name: "Ambulance Excel",
      rating: 4.5,
      time: 10,
      price: 1000,
      img: Logoex,
    },
    {
      name: "Ambulance Plus",
      rating: 4.5,
      time: 10,
      price: 1000,
      img: Logoex,
    },
  ];
  return (
    <>
      <div className="scroll2">
        {ambulanceList.map((ambulance) => (
          <label>
            <input type="radio" className="card-input-element" />
            <div className="ambulance-card card-input">
              <div className="card1">
                <img
                  src={ambulance.img}
                  alt="Logogo"
                  style={{ height: "60px", width: "60px" }}
                />
              </div>

              <div className="card2">
                <div className="abu-detail">
                  <p>
                    <b>{ambulance.name}</b>
                  </p>
                  <p>
                    Standard ambulance, <br /> fastest service
                  </p>
                </div>
                <div className="abu-price">
                  <p className="priceColor">
                    <b> ₹ 500</b>
                  </p>
                  <p>10 mins</p>
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>
    </>
  );
};

export default Ambulance;
