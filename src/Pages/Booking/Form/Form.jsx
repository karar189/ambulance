import React, { useState } from "react";
import Address from "./Address/Address";
import Ambulance from "./Ambulance/Ambulance";
import Hospital from "./Hospital/Hospital";
import Progressbar from "../../../components/Progressbar/Progressbar";
import locator from "../../../assets/LOGO-map.svg";
import "./style.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const Form = ({
  formData,
  setFormData,
  forwardedRef,
  calculateRoute,
  test,
}) => {
  const [page, setPage] = useState(0);
  const FormTitles = [
    "Enter your address",
    "Select your Hospital",
    "Select Ambulance",
  ];

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <Address
            formData={formData}
            setFormData={setFormData}
            forwardedRef={forwardedRef}
          />
        );
      case 1:
        return (
          <Hospital
            formData={formData}
            setFormData={setFormData}
            forwardedRef={forwardedRef}
          />
        );
      case 2:
        return <Ambulance formData={formData} setFormData={setFormData} />;
      default:
        return <Address formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="header">
          <h1>
            <img className="loc-img" src={locator} alt="Logo" />
            {FormTitles[page]}
          </h1>
        </div>
        <div className="body">{pageDisplay()}</div>
        <div className="footer">
          <button
            className="back-btn"
            disabled={page == 0}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            Back
          </button>
          <button
            className="next-btn"
            onClick={() => {
              if (page == FormTitles.length - 1) {
                alert("Booking Confirmed");
              } else {
                setPage((currPage) => currPage + 1);
                if (page == FormTitles.length - 2) {
                  {
                    // test();
                    calculateRoute();
                  }
                }
              }
            }}
          >
            {page == FormTitles.length - 1 ? "Submit" : "Proceed"}
          </button>
        </div>

        <div className="progress-bar">
          <div
            style={{
              width: page === 0 ? "20.3%" : page == 1 ? "66.6%" : "100%",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Form;
