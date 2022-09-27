import React from "react";
import Payment from "./Payment/Payment";
import "./style.css";
import Logogo from "../../../../assets/ambulance-go.svg";
import Logoex from "../../../../assets/ambulance-excel.svg";
import cash from "../../../../assets/cash.svg";

import Drawer from "react-bottom-drawer";

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
  const [isVisible, setIsVisible] = React.useState(true);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);
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

      <div className="payment-box">
        <div className="logo">
          <img
            src={cash}
            style={{ height: "50px", width: "60px" }}
            alt="cashlogo"
          />
        </div>
        <div className="type-payment">
          <h2 style={{ fontSize: "21px", marginLeft: "10px" }}>Cash</h2>
        </div>
        <div className="pay-now">
          <button className="pay-btn" onClick={openDrawer}>
            Change {" >"}
          </button>
        </div>
      </div>
      {/* <center>
        <button className="open-btn" onClick={openDrawer}>
          SHOW ME THE DIALOG!
        </button>
      </center> */}
      <Drawer
        duration={250}
        // hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
      >
        <Payment />
      </Drawer>
    </>
  );
};

export default Ambulance;
