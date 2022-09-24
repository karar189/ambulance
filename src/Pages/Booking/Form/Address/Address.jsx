import React from "react";
import "./style.css";

const Address = () => {
  return (
    <div className="address-box">
    <div  className="address-wrap">  
    <input className="adrs"  type="text" placeholder="Eg. 16, Fulton street, Apt no. 12" />
      </div>
      <br/>
      <div className="address-wrap">
      <input  className="adrs"  type="text" placeholder="Landmark near you" />
      </div>
      
      <br/>
      <div className="address-wrap">
      <input  className="adrs"  type="number" placeholder="Pincode" />
     
      </div>
      <br />
      <a href="#" ClassName="your-location" style={{ textDecoration: "none" }}>
        Your Location
      </a>
    </div>
  );
};

export default Address;
