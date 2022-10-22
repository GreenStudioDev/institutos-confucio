import { useContext } from "react";
import { mapContext } from "../context";
import "../App.css";

export const NavigateButton = () => {
//   const { institutesMap } = useMap();
const { map } = useContext(mapContext)

  const onClick = () => {
    map.flyTo({
      center: [-62.546, -33.127],
      zoom: 3.18,
      pitch: 63,
      bearing: -10,
    });
  };

  return <button className="home-button" onClick={onClick}>Volver</button>;
};
