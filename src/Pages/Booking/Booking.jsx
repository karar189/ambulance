import React, { useState, useRef } from "react";
import Form from "./Form/Form";
import MapBoxL from "./MapboxL/MapBoxL";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete, // necessary for Autocomplete
  DirectionsRenderer, // necessary for DirectionsRenderer
} from "@react-google-maps/api";

import "./style.css";

const centre = {
  lat: 22.5726,
  lng: 88.3639,
};

const Booking = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC7zvg4GcCd0EUescJBnU79y1-sN3qdfVI",
    libraries: ["places"], // necessary for Autocomplete
  });
  const [map, setMap] = useState(/** @type google.maps.GoogleMap */ (null));
  const addressRef = useRef();
  const searchRef = useRef();
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [formData, setFormData] = useState({
    address: "",
    landmark: "",
    pincode: "",
    search: "",
    hospital: "",
    ambulance: "",
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  const calculateRoute = async () => {
    if (addressRef.current.value === "" || searchRef.current.value === "") {
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: addressRef.current.value,
      destination: searchRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    // setDirections(results);
    // setFormData.address(results);
    // setDistance(results.routes[0].legs[0].distance.text);
    // setDuration(results.routes[0].legs[0].duration.text);
    // console.log(results);
    alert("Your ambulance is on the way"); //the function is working the logic is not!!
  };

  function test() {
    console.log(formData);
    alert("Your data has been retrived");
  }

  return (
    <>
      <div className="booking">
        <div className="container-map">
          {/* <MapBoxL /> */}
          {/* <button className="calculate-route" onClick={calculateRoute}>
            Calculate Route
          </button> */}
          <GoogleMap
            mapContainerStyle={{
              height: "400px",
              width: "500px",
            }}
            zoom={10}
            center={centre}
            options={{
              // zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
          >
            <Marker position={centre} />
            {formData.address && (
              <DirectionsRenderer address={formData.address} />
            )}
          </GoogleMap>
        </div>
        <div className="container-form">
          <Form
            formData={formData}
            setFormData={setFormData}
            forwardedRef={[addressRef, searchRef]}
            calculateRoute={calculateRoute}
            test={test}
          />
        </div>
      </div>
      <button onClick={test}>click me test</button>
    </>
  );
};

export default Booking;
