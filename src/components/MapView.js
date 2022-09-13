import "mapbox-gl/dist/mapbox-gl.css";
import { Map, Marker, Popup } from "mapbox-gl";
import { useRef, useEffect, useState } from "react";
import { useGeoInstitutes } from "../helpers/getGeoInstitutes";

export const MapView = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-67.546);
  const [lat, setLat] = useState(-39.427);
  const [zoom, setZoom] = useState(3.56);
  const stores = useGeoInstitutes();
  // console.log("🚀 ~ file: Map.js ~ line 31 ~ Map ~ useGeoInstitutes", useGeoInstitutes)
  console.log("🚀 ~ file: Map.js ~ line 31 ~ Map ~ stores", stores);

  useEffect(() => {
    map.current = new Map({
      container: mapContainer.current,
      style: "mapbox://styles/anhisa/cl7hqs5ru002i14o8bxejg8tx/draft",
      // style: "mapbox://styles/anhisa/cl7gekanx000y14pixw1m0l3d",
      center: [lng, lat],
      zoom: zoom,
      pitch: 63, // pitch in degrees
      bearing: -10, // bearing in degrees
    });

    const instututePopup = stores.features.map((feature) =>
    new Popup().setHTML(`
    <div>${feature.properties.email_1}</div>
    <div>${feature.properties.phone}</div>
    <div>${feature.properties.chinese_director}</div>
    <div>${feature.properties.chinese_director_email}</div>
    <div>${feature.properties.chinese_director_profile}</div>
    <div>${feature.properties.cooperation}</div>
    <div>${feature.properties.local_director}</div>
    <div>${feature.properties.local_director_email}</div>
    <div>${feature.properties.local_director_profile}</div>
    <div>${feature.properties.website}</div>
    <div>${feature.properties.year}</div>
    <img src = ${feature.properties.logo}></img>
    `).setLngLat(feature.geometry.coordinates).addTo(map.current)
    )

    stores.features.map((feature) =>
      new Marker().setLngLat(feature.geometry.coordinates).addTo(map.current)
    );

    // map.on(
    //   "load",
    //   () => {
    //     map.addSource("places", {
    //       type: "geojson",
    //       data: stores,
    //     });

    //     map.addLayer({
    //       id: "locations",
    //       type: "circle",
    //       /* Add a GeoJSON source containing place coordinates and information. */
    //       source: "places",
    //       paint: {
    //         "circle-color": "#4264fb",
    //         "circle-radius": 8,
    //         "circle-stroke-width": 2,
    //         "circle-stroke-color": "#ffffff",
    //       },
    //     });

    //     map.on("click", "circle", (e) => {
    //       map.flyTo({
    //         center: e.features[0].geometry.coordinates,
    //       });
    //     });

    //     // Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
    //     map.on("mouseenter", "circle", () => {
    //       map.getCanvas().style.cursor = "pointer";
    //     });

    //     // Change it back to a pointer when it leaves.
    //     map.on("mouseleave", "circle", () => {
    //       map.getCanvas().style.cursor = "";
    //     });
    //   },
    //   [institutes, lat, lng, zoom]
    // );

    // map.on("click", (e) => {
    //   map.flyTo({
    //     center: e.features[0].geometry.coordinates,
    //   });
    //   setLng(map.getCenter().lng.toFixed(4));
    //   setLat(map.getCenter().lat.toFixed(4));
    //   setZoom(map.getZoom().toFixed(2));
    // });
  }, [lat, lng, stores, zoom]);

  return <div ref={mapContainer} className="map-container" />;
};
