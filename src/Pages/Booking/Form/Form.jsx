import React, { useState } from "react";
import Address from "./Address/Address";
import Ambulance from "./Ambulance/Ambulance";
import Hospital from "./Hospital/Hospital";

const Form = () => {
  const [page, setPage] = useState(0);
  const FormTitles = [
    "Enter your address",
    "Select your Hospital",
    "Select Ambulance",
  ];

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <Address />;
      case 1:
        return <Hospital />;
      case 2:
        return <Ambulance />;
      default:
        return <Address />;
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="header">
          <h1>
            <img src="" alt="" />
            {FormTitles[page]}
          </h1>
        </div>
        <div className="body">{pageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            Back
          </button>
          <button
            disabled={page == FormTitles.length - 1}
            onClick={() => setPage((currPage) => currPage + 1)}
          >
            Proceed
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
