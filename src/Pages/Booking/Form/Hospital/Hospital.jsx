import React from "react";
import {
  Autocomplete, // necessary for Autocomplete
} from "@react-google-maps/api";

const Hospital = ({ formData, setFormData, forwardedRef }) => {
  const handleInputChangeHospital = (e) => {
    setFormData({ ...formData, search: e.target.value });
    console.log(e.target.value);
  };
  return (
    <>
      <div className="search-bar">
        {" "}
        <Autocomplete>
          <input
            type="text"
            placeholder="Search.."
            value={formData.search}
            onChange={handleInputChangeHospital}
            ref={forwardedRef[1]}
          />
        </Autocomplete>
      </div>
      <div className="hospital-list">
        <h2>Nearest Hospitals</h2>
        <div className="hospital">
          <div className="hospital-name">Hospital 1</div>
          <div className="hospital-address">Address 1</div>
          <div className="hospital-distance">5km</div>
          <div className="rating">4.5/5</div>
          <div className="emergency">ER available</div>
          <div className="time">15mins</div>
        </div>
      </div>
    </>
  );
};

export default Hospital;
