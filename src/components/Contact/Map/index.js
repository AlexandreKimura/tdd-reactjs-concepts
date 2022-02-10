import React from "react";
import { LoadScripts, GoogleMap } from "react-google-maps";

const Map = ({ center }) => (
  <LoadScripts id="scripts-loader" googleMapsApiKey="YOUR_API_KEY">
    <GoogleMap id="example-map" center={center} />
  </LoadScripts>
);

export default Map;
