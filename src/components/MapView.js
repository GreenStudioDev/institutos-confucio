import "../App.css";
import "mapbox-gl/dist/mapbox-gl.css";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl, { Map, Popup } from "!mapbox-gl";
import { useRef, useEffect, useContext } from "react";
import { institutesContext, mapContext } from "../context";
import {institutesjson} from "../helpers";
// import { Loading } from "./";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const MapView = () => {
  const mapContainer = useRef();
  const institutes = institutesjson;

  const { setMap } = useContext(mapContext);
  // const { isLoading } = useContext(institutesContext);
  // const { isMapReady } = useContext(mapContext)

  useEffect(() => {
    const map = new Map({
      container: mapContainer.current,
      style: "mapbox://styles/anhisa/cl7hqs5ru002i14o8bxejg8tx",
      center: [-67.546, -39.427],
      zoom: 3.56,
      pitch: 63, // pitch in degrees
      bearing: -10, // bearing in degrees
    })
      .on("load", () => {
        map.addSource("institutes", {
          type: "geojson",
          data: institutes,
        });

        map.addLayer({
          id: "circle",
          type: "circle",
          source: "institutes",
          paint: {
            "circle-color": "rgba(76, 175, 80, 0.1)",
            "circle-radius": 12,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#ffffff",
          },
        });
      })
      .on("click", "circle", (e) => {
        map.flyTo({
          center: e.features[0].geometry.coordinates,
          zoom: 15,
          pitch: 63,
          bearing: 80,
        });

        new Popup()
          .setLngLat(e.features[0].geometry.coordinates)
          .setHTML(
            `
        <div>${e.features[0].properties.email_1}</div>
        <div>${e.features[0].properties.phone}</div>
        <div>${e.features[0].properties.chinese_director}</div>
        <div>${e.features[0].properties.chinese_director_email}</div>
        <div>${e.features[0].properties.chinese_director_profile}</div>
        <div>${e.features[0].properties.cooperation}</div>
        <div>${e.features[0].properties.local_director}</div>
        <div>${e.features[0].properties.local_director_email}</div>
        <div>${e.features[0].properties.local_director_profile}</div>
        <div>${e.features[0].properties.website}</div>
        <div>${e.features[0].properties.year}</div>
        <img class="logo" src = ${e.features[0].properties.logo} ></img>
        `
          )
          .addTo(map);
      });

    map.on("mouseenter", "circle", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    map.on("mouseleave", "circle", () => {
      map.getCanvas().style.cursor = "";
    });

    setMap(map);

    return () => map.remove();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [institutes]);

  return <div ref={mapContainer} className="map-container" />;
};
