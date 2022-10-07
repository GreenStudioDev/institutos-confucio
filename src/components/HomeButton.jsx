import { useContext } from "react";
import { mapContext } from "../context";

export const NavigateButton = () => {
//   const { institutesMap } = useMap();
const { map } = useContext(mapContext)

  const onClick = () => {
    map.flyTo({
      center: [-67.546, -39.427],
      zoom: 3.5,
      pitch: 63,
      bearing: -10,
    });
  };

  return <button onClick={onClick}>Volver</button>;
};
