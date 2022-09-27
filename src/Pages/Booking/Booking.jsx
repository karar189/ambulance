import React, { useState, useRef, useEffect } from "react";
import Form from "./Form/Form";
import MapBoxL from "./MapboxL/MapBoxL";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer, // necessary for DirectionsRenderer
  InfoWindow,
} from "@react-google-maps/api";

import "./style.css";
import ambu from "../../assets/ambuu.svg";
import ambuMarker1 from "../../assets/ambuMarker1.svg";

const Booking = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC7zvg4GcCd0EUescJBnU79y1-sN3qdfVI",
    libraries: ["places"], // necessary for Autocomplete
  });

  const addressRef = useRef();
  const searchRef = useRef();
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [directions, setDirections] = useState(null);
  const [formData, setFormData] = useState({
    address: "",
    landmark: "",
    pincode: "",
    search: "",
    hospital: "",
    ambulance: "",
  });
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [center, setcenter] = useState({
    lat: 22.5726,
    lng: 88.3639,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setcenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  const calculateRoute = async () => {
    if (formData.address === "" || formData.search === "") {
      alert("Please enter the address and search location");
    }
    const directionsService = new window.google.maps.DirectionsService();
    const origin = formData.address;
    const destination = formData.search;
    const results = await directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    setDirections(results);

    // alert("Your ambulance is on the way"); //the function is working the logic is not!!
  };
  // const reverseGeocode = () => {
  //   const url = `${geocodeJson}?key="AIzaSyC7zvg4GcCd0EUescJBnU79y1-sN3qdfVI"&latlng=${center.lat},${center.lng}`;

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const address = data.results[0].formatted_address;
  //       addressRef.current.value = address;
  //       setFormData({ ...formData, address: address });
  //     });

  //   console.log(formData.address);
  // };

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
              width: "300px",
              height: "450px",
              padding: "50px",
            }}
            zoom={10}
            center={center}
            options={{
              // zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker
              position={center}
              img={ambu}
              icon={{
                url: ambu,
                scaledSize: new window.google.maps.Size(50, 50),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
            >
              {directions && <DirectionsRenderer directions={directions} />}
            </Marker>
            <Marker
              position={center.lat + "0.000001" + center.lng + "0.000001"}
              icon={{
                url: ambuMarker1,
                scaledSize: new window.google.maps.Size(50, 50),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
            />
          </GoogleMap>
        </div>
        <div className="container-form">
          <Form
            formData={formData}
            setFormData={setFormData}
            forwardedRef={[addressRef, searchRef]}
            calculateRoute={calculateRoute}
            center={center}
            map={map}
            setcenter={setcenter}
          />
        </div>
      </div>
    </>
  );
};

export default Booking;
