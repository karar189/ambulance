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

  const hospitals = [
    {
      name: "Apollo Hospital, Kolkata",
      dis: 2.5,
      rating: 4.5,
      time: 10,
    },
    {
      name: "Hospital 2",
      location: { lat: 12.9716, lng: 77.5946 },
      dis: 2.5,
      rating: 4.5,
      time: 10,
    },
    {
      name: "Hospital 3",
      location: { lat: 12.9716, lng: 77.5946 },
      dis: 2.5,
      rating: 4.5,
      time: 10,
    },
    {
      name: "Hospital 4",
      location: { lat: 12.9716, lng: 77.5946 },
      dis: 2.5,
      rating: 4.5,
      time: 10,
    },
  ];
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
        <div className="scroll">
          {hospitals.map((hospital) => (
            <label>
              <input
                type="radio"
                name="hospital"
                className="card-input-element"
              />
              <div className="hospital-1 card-input">
                <div className="name-dist">
                  <div className="hospital-name">{hospital.name}</div>
                  <div className="hospital-distance">{hospital.dis}km</div>
                </div>
                <div className="ret">
                  <div className="rating">{hospital.rating}/5</div>
                  <div className="emergency">ER available</div>
                  <div className="time">{hospital.time}mins</div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hospital;
