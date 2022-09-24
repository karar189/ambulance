import React, { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, GeolocateControl } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
const MapBoxL = () => {
  //   var directions = new MapboxDirections({
  //     accessToken:
  //       "pk.eyJ1Ijoic3dldGFrYXJhciIsImEiOiJjbDhmbGU4eXcwbWlhM3BwOXR1ZnZ1ZDM0In0.rN52jL7R9_rNZBEVaE9liQ",
  //     unit: "metric",
  //     profile: "mapbox/cycling",
  //   });
  //   var map = new mapboxgl.Map({
  //     container: "map",
  //     style: "mapbox://styles/mapbox/streets-v9",
  //   });
  //   map.addControl(directions, "top-left");
  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoic3dldGFrYXJhciIsImEiOiJjbDhmbGU4eXcwbWlhM3BwOXR1ZnZ1ZDM0In0.rN52jL7R9_rNZBEVaE9liQ"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{
          width: "600px",
          height: "400px",
          borderRadius: "10px",
          border: "1px solid #000",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          longitude={-122.4}
          latitude={37.8}
          draggable={true}
          offsetLeft={-20}
          style={{
            cursor: "pointer",
            zIndex: 100,
            width: "60px",
            height: "60px",
          }}
        >
          <div>❤️</div>
        </Marker>
        <GeolocateControl trackUserLocation={true} />
        {/* <MapboxDirections
          accessToken="pk.eyJ1Ijoic3dldGFrYXJhciIsImEiOiJjbDhmbGU4eXcwbWlhM3BwOXR1ZnZ1ZDM0In0.rN52jL7R9_rNZBEVaE9liQ"
          origin={[-122.4, 37.8]}
          destination={[-122.4, 37.8]}
          profile="mapbox/driving"
          unit="metric"
          mapstyles="mapbox://styles/mapbox/streets-v9"
        /> */}
      </Map>
    </>
  );
};

export default MapBoxL;
