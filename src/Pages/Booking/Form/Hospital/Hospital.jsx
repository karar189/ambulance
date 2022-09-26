import React from "react";
import {
  Autocomplete, // necessary for Autocomplete
} from "@react-google-maps/api";
import "./style.css";

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
        <h2 className="near-hosp">Nearest Hospitals</h2>
        <div className="line">
          <hr></hr>
        </div>

        <div className="hospital-1">
          <div className="name-dist">
            <div className="hospital-name">Apollo hospital, College square</div>
            <div className="hospital-distance">10km</div>
          </div>
          <br />

          {/* <div className="hospital-address">Address 1</div>  */}
        </div>
        <div className="ret">
          <div className="rating">4.5/5</div>
          <div className="emergency">ER available</div>
          <div className="time">15mins</div>
        </div>

        <br></br>

        <div className="hospital-2">
          <div className="name-dist-2">
            <div className="hospital-name-2">Fortis Hospital, Anandapur </div>
            <div className="hospital-distance">15km</div>
          </div>
          <br />

          {/* <div className="hospital-address">Address 1</div>  */}
        </div>
        <div className="ret">
          <div className="rating">4.8/5</div>
          <div className="emergency">ER available</div>
          <div className="time">35mins</div>
        </div>
      </div>
    </>
  );
};

export default Hospital;
