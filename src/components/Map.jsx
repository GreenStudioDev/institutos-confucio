import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5oaXNhIiwiYSI6ImNsMXFscTRpcDFvZzczbG1tNW9ydGtwNnEifQ.SBvsqRzZS9FNTb6iYOOfyg";

export const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70);
  const [lat, setLat] = useState(-15);
  const [zoom, setZoom] = useState(2.1);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div>
    <div ref={mapContainer} className="map-container" />
    </div>
    );
};
