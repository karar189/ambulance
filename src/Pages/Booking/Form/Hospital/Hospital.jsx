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


        <div className="hospital-1">
          <div className="name-dist">
            <div className="hospital-name">Apollo hospital, College square</div>
            <div className="hospital-distance">10km</div>
          </div>
          <br />

          {/* <div className="hospital-address">Address 1</div>  */}
        </div>
        <div className ="ret">
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
        <div className ="ret">
           <div className="rating">4.8/5</div>
           <div className="emergency">ER available</div>
           <div className="time">35mins</div>
        </div>
      </div>
    </>
  );
};

export default Hospital;
