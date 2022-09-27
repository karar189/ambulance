import React from "react";
import profile from "../../../../assets/driver-profile.svg";
import "./style.css";
import ambulance from "../../../../assets/ambulance-excel.svg"
import phone from "../../../../assets/phone-logo.svg"
import message from "../../../../assets/message-logo.svg"


const ConfirmBook = () => {
  return (
    <>
        <div className = "confirm-details">

         <div className = "driver-details">
              <img className="profile" src = {profile} alt="profile" />
            
                   <p className = "driver">Driver
                   <br/><span><b>Rewant Chapri</b></span></p>
                    <div className= "driver-ratings"> <p>3.5/5</p>
                  </div>
                   
             </div>

        <div className = "ambulance-details" >
           <img className ="car" src = {ambulance} alt="car" />
           <p className = "driver">Vehicle  No.<br/><span><b>WB-1826</b></span></p>
           <div></div>  <div></div>  <div></div>
           </div>
          


        <div className = "con-amb">Contact Ambulance</div>
        <br/>
        <div className = "contact-details">
          <div className = "number">9883256806</div>
           <img className="phone" src = {phone} alt = "phone-icon"/>
           <img className="message" src = {message}alt = "message-icon"/>
        </div>
        <br/>
        <div className = "pay">Payment method</div>
        <br/>
        <div className = "payment-details">
           <div className = "cash">Cash</div>
           <div className = "cash-amount">
            Rs.1000</div>
        </div>

        <hr></hr>



        

        

        </div>
    
    
    
    
    
    










    </>
  );
};


export default ConfirmBook;
