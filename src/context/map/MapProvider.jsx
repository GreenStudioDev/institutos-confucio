// eslint-disable-next-line import/no-webpack-loader-syntax
import { Map, } from "!mapbox-gl";
import React, { useContext, useReducer } from "react";
import { mapContext, mapReducer } from "..";

export const mapState = {
  isMapReady: false,
  map: undefined,
};

export const MapProvider = ({ children }) => {

  const [state, dispatch] = useReducer(mapReducer, mapState);

  const setMap = (map = Map) => {
      
      dispatch({ type: "setMap", payload: map });
      
    } 

  return (
    <mapContext.Provider
      value={{
        ...state,
        // Methods
        setMap,
      }}
    >
      {children}
    </mapContext.Provider>
  );
};

export const useMapValue = () => useContext(mapContext);
