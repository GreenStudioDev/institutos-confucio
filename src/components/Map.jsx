import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useRef, useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5oaXNhIiwiYSI6ImNsMXFscTRpcDFvZzczbG1tNW9ydGtwNnEifQ.SBvsqRzZS9FNTb6iYOOfyg";

export const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
//   const [lng, setLng] = useState(-67.546);
//   const [lat, setLat] = useState(-39.427);
//   const [zoom, setZoom] = useState(3.56);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/anhisa/cl7hqs5ru002i14o8bxejg8tx",
      center: [-67.546, -39.427],
      zoom: 3.56,
      pitch: 63, // pitch in degrees
      bearing: -10, // bearing in degrees
    });
  });
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};
