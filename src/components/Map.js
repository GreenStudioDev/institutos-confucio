import "mapbox-gl/dist/mapbox-gl.css";
import {Map, Marker, Popup} from "mapbox-gl";
import { useRef, useEffect, useState } from "react";

import { useGeoInstitutes } from "../helpers/getGeoInstitutes";



export const Maps = () => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-67.546);
  const [lat, setLat] = useState(-39.427);
  const [zoom, setZoom] = useState(3.56);
  const stores = useGeoInstitutes();


  useEffect(() => {
      map.current = new Map({
        container: mapContainer.current,
        style: "mapbox://styles/anhisa/cl7hqs5ru002i14o8bxejg8tx/draft",
        // style: "mapbox://styles/anhisa/cl7gekanx000y14pixw1m0l3d",
        center: [lng, lat],
        zoom: zoom,
        pitch: 63, // pitch in degrees
        bearing: -10, // bearing in degrees
      })

      
  
      stores.features.map((feature) => {

        const instututePopup = new Popup().setHTML(`
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
          `)

        return (
          <button>{new Marker().setLngLat(feature.geometry.coordinates).setPopup(instututePopup).addTo(map.current)}</button>
          )}
            
          )


  }, [lat, lng, stores, zoom]);



  return <div ref={mapContainer} className="map-container" />;
};


