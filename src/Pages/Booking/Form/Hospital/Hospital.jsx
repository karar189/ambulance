import React from "react";
import "./style.css";

const Hospital = () => {
  return (
    <>
      <div className="search-bar">
        {" "}
        <input type="text" placeholder="Search.." />
      </div>
      <div className="hospital-list">
        <h2 className="near-hosp">Nearest Hospitals</h2>
        <div className="line">
          <hr></hr>
        </div>
       
        <div className="hospital">
        <div className="name-dist">
          <div className="hospital-name">Apollo  hospital,  College square</div>
          <div className="hospital-distance">10km</div>
          </div>
          <br/>
          
          
         {/* <div className="hospital-address">Address 1</div>  */}
          
          <div className="rating">4.5/5</div>
          <div className="emergency">ER available</div>
          <div className="time">15mins</div>
        </div>
      </div>
    </>
  );
};

export default Hospital;
