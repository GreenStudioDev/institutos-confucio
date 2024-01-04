import "../App.css";
import "mapbox-gl/dist/mapbox-gl.css";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl, { Map, Popup } from "!mapbox-gl";
import { useRef, useEffect, useContext } from "react";
import { /*institutesContext,*/ mapContext } from "../context";
import { getFlags2, institutesjson } from "../helpers";
// import { getFlag } from "../helpers";

mapboxgl.accessToken = "pk.eyJ1IjoiZmFiY2hpbmFsYXRhbSIsImEiOiJjbDl5NmxxbmQwMXBoM3JwYjN2enB5cXo3In0.MndM8LaRfUlGHHiadP7ZZg"

export const MapView = () => {
  const mapContainer = useRef();
  const institutes = institutesjson;
  const { setMap } = useContext(mapContext);
  // const { institutes } = useContext(institutesContext);
  // console.log("🚀 ~ file: MapView.jsx:18 ~ MapView ~ institutes:", institutes)


  useEffect(() => {
    let mapZoom = () => {
      if (window.innerWidth <= 500) {
        return 2.31;
      } else return 3.18;
    };

    const map = new Map({
      container: mapContainer.current,
      style: "mapbox://styles/fabchinalatam/cl9yc1y04001014mfo3aglmlr",
      center: [-62.546, -33.127],
      zoom: mapZoom(),
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
          bearing: -10,
        });

        new Popup()
          .setLngLat(e.features[0].geometry.coordinates)
          .setHTML(
            `
              <div class= "popup-container">
                <div class= "popup-box-title title">
                  <span>${e.features[0].properties.type}</span>
                  <span>${e.features[0].properties.place}</span>
                  <img
                src=${getFlags2(e.features[0].properties.country_name)}
                alt=${`bandera de ${e.features[0].properties.country_name}`}
                class = "popup-flag"
              />
                  <hr/>
                  </div>
                  <div class= ${
                    e.features[0].properties.website === ""
                      ? "popup-box-item-hide"
                      : "popup-box-item"
                  }>
                <a class= ${
                  e.features[0].properties.website === ""
                    ? "popup-box-item-hide"
                    : "popup-box-item"
                } href = ${e.features[0].properties.website} target = "blank">
                  <div>Visitar Website</div>
                </a>
                <hr/>
                </div>
                <div class= ${
                  e.features[0].properties.email_1 === ""
                    ? "popup-box-item-hide"
                    : "popup-box-item"
                }>
                  <div class="title">Email</div>
                  <div>${e.features[0].properties.email_1}</div>
                  <div>${e.features[0].properties.email_2}</div>
                  <hr/>
                </div>
                <div class= ${
                  e.features[0].properties.phone === ""
                    ? "popup-box-item-hide"
                    : "popup-box-item"
                }>
                  <div class="title">Teléfono</div>
                  <div>${e.features[0].properties.phone}</div>
                  <hr/>
                  </div>
                  <div class= ${
                    e.features[0].properties.chinese_director === ""
                      ? "popup-box-item-hide"
                      : "popup-box-item"
                  }>
                  <div class="title">Director Chino</div>
                  <div>${e.features[0].properties.chinese_director}</div>
                  <hr/>
                  </div>
                  <div class= ${
                    e.features[0].properties.chinese_director_email === ""
                      ? "popup-box-item-hide"
                      : "popup-box-item"
                  }>
                  <div class="title">Email del director Chino</div>
                  <div>${e.features[0].properties.chinese_director_email}</div>
                  <hr/>
                  </div>
                  <div class= ${
                    e.features[0].properties.chinese_director_profile === ""
                      ? "popup-box-item-hide"
                      : "popup-box-item"
                  }>
                  <div class="title">Perfil del director Chino</div>
                  <div>${
                    e.features[0].properties.chinese_director_profile
                  }</div>
                  <hr/>
                  </div>
                  <div class= ${
                    e.features[0].properties.cooperation === ""
                      ? "popup-box-item-hide"
                      : "popup-box-item"
                  }>
                  <div class="title">Cooperación</div>
                  <div>${e.features[0].properties.cooperation}</div>
                  <hr/>
                  </div>
                  <div class= ${
                    e.features[0].properties.local_director === ""
                      ? "popup-box-item-hide"
                      : "popup-box-item"
                  }>
                  <div class="title">Director local</div>
                  <div>${e.features[0].properties.local_director}</div>
                  <hr/>
                </div>
                <div class= ${
                  e.features[0].properties.local_director_email === ""
                    ? "popup-box-item-hide"
                    : "popup-box-item"
                }>
                  <div class="title">Email del Director local</div>
                  <div>${e.features[0].properties.local_director_email}</div>
                  <hr/>
                </div>
                <div class= ${
                  e.features[0].properties.local_director_profile === ""
                    ? "popup-box-item-hide"
                    : "popup-box-item"
                }>
                  <div class="title">Perfil del Director local</div>
                  <div>${e.features[0].properties.local_director_profile}</div>
                  <hr/>
                </div>
                <div class= ${
                  e.features[0].properties.year === ""
                    ? "popup-box-item-hide"
                    : "popup-box-item"
                }>
                  <div class="title">Inauguración</div>
                  <div>${e.features[0].properties.year}</div>
                  <hr/>
                </div>
                <div class= ${
                  e.features[0].properties.logo === ""
                    ? "popup-box-item-hide"
                    : "popup-box-item"
                }>
                  <div class="title">Logo</div>
                  <img class="logo-institute" src = ${
                    e.features[0].properties.logo
                  } ></img>
                </div>
              </div>
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
