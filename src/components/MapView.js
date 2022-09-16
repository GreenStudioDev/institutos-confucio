import "mapbox-gl/dist/mapbox-gl.css";
import { Map, Popup } from "mapbox-gl";
import { useRef, useEffect } from "react";
import { useGeoInstitutes } from "../helpers/getGeoInstitutes";

export const MapView = () => {
  const mapContainer = useRef(null);
  // const [zoom, setZoom] = useState(3.56);
  // const center = [-67.546, -39.427];
  const stores = useGeoInstitutes();

  useEffect(() => {
    // if(mapContainer.current) return;
    const map = new Map({
      container: mapContainer.current,
      style: "mapbox://styles/anhisa/cl7hqs5ru002i14o8bxejg8tx/draft",
      center: [-67.546, -39.427],
      zoom: 3.56,
      pitch: 63, // pitch in degrees
      bearing: -10, // bearing in degrees
    }).on("load", () => {
      map.addSource("$institutes", {
        type: "geojson",
        data: stores,
      });

      map.addLayer({
        id: "circle",
        type: "circle",
        source: "$institutes",
        paint: {
          "circle-color": "rgba(76, 175, 80, 0.1)",
          "circle-radius": 12,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });
    });

    map.on("click", "circle", (e) => {
      // setCenter(e.features[0].geometry.coordinates);
      // setZoom(12);
      map.flyTo({
        center: e.features[0].geometry.coordinates,
        zoom: 13,
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
            <img src = ${e.features[0].properties.logo}></img>
            `
          ).addTo(map);
        
      });

    map.on("mouseenter", "circle", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    map.on("mouseleave", "circle", () => {
      map.getCanvas().style.cursor = "";
    });

    return () => map.remove();
  }, [stores]);


  return <div ref={mapContainer} className="map-container" />;
};

