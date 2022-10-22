import "../App.css";
import { useContext } from "react";
import { mapContext } from "../context";


export const InstituteCard = (props) => {
  const { map } = useContext(mapContext);


  const onClick = () => {
    map.flyTo({
      center: props.coordinates,
      zoom: 15,
      pitch: 63,
      bearing: 80,
    });
  };

  return (
    // <section className="listings" key={`dd-${props.id}`}>
          <div className="item" onClick={onClick}>
            <div className="title">{props.name}</div>
            <div>{props.address}</div>
            <div>{props.city}</div>
          </div>
    // </section>
  );
};
