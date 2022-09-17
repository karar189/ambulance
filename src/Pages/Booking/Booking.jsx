import React from "react";
import Form from "./Form/Form";

const Booking = () => {
  return (
    <>
      <div className="booking">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5630588491!2d88.0495330844405!3d22.675752088043538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1663363524883!5m2!1sen!2sin"
          frameborder="0"
          width="1100"
          height="650"
          style={{ border: 0, color: "white", backgroundColor: "black" }}
        ></iframe>
        <Form></Form>
      </div>
    </>
  );
};

export default Booking;
