import React from "react";
import profile from "../../../../assets/driver-profile.svg";
import "./style.css";
import ambulance from "../../../../assets/ambulance-excel.svg"



const ConfirmBook = () => {
  return (
    <>
        <div className = "confirm-details">

         <div className = "driver-details">
              <img className="profile" src = {profile} alt="profile" />
            
                   <p className = "driver">Driver
                   <br/><span><b>Rewant Chapri</b></span></p>
                    <div className= "driver-ratings"> <p>3.5/5</p></div>
                   
             </div>

        <div className = "ambulance-details" >
           <img className ="car" src = {ambulance} alt="car" />
           <div className = "ambulance-details">
               <div className = "vehicle">Vehicle no.</div>
                <div className = "Vehicle-No">
                </div>
              </div>


        <div className = "con-amb">Contact Ambulance</div>

        <div className = "contact-details">
          <div className = "number"> </div>
           <img src = "#" alt = "phone-icon"/>
           <img src = "#" alt = "message-icon"/>
        </div>
        
        <div className = "pay">Payment method</div>

        <div className = "paymnet-details">
           <div className = "Cash">Cash</div>
           <div className = "cash-amount"></div>
        </div>

        <hr></hr>



        </div>

        

        </div>
    
    
    
    
    
    










    </>
  );
};


export default ConfirmBook;
