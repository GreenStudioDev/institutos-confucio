import React, { useContext, useReducer } from "react";
import { institutesContext } from "./institutesContext";



export const InstitutesProvider = (reducer, initialState, children) => (
  <institutesContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </institutesContext.Provider>
);

export const useInstituteValue = () => useContext(institutesContext);

