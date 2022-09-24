import React from "react";

const Hospital = () => {
  return (
    <>
      <div className="search-bar">
        {" "}
        <input type="text" placeholder="Search.." />
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
