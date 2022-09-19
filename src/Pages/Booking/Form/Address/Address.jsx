import React from "react";

const Address = () => {
  return (
    <div>
      <input type="text" placeholder="Eg. 16, Fulton street, Apt no. 12" />
      <input type="text" placeholder="Landmark near you" />
      <input type="number" placeholder="Pincode" />
      <br />
      <a href="#" style={{ textDecoration: "none" }}>
        Your Location
      </a>
    </div>
  );
};

export default Address;
