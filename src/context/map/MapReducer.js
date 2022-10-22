
import { Map } from "mapbox-gl";
import { mapState } from "..";

const mapAction = { type: "setMap", payload: Map };

export const mapReducer = (state=mapState, action=mapAction) => {
  switch (action.type) {
    case "setMap":
      return {
        ...state,
        isMapReady: true,
        map: action.payload,
      };
    default:
      return state;
  }
};
