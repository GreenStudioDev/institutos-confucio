import React, { useContext, useReducer, useEffect } from "react";
import { institutesContext, institutesState, institutesReducer } from "..";
import { useGeoInstitutes } from "../../helpers";

// export const initialState = {
//   isLoading: true,
//   institutes: {},
// };

export const InstitutesProvider = ({children}) => {

  const [state, dispatch] = useReducer(institutesReducer, institutesState);
  // const institutes = useGeoInstitutes();
  
  useEffect(() => {
    dispatch({
      type: 'getInstitutes',
      payload: useGeoInstitutes,
    });
  }, []);

  return (
    <institutesContext.Provider value={{ ...state }}>
      {children}
    </institutesContext.Provider>
  );
};

export const useInstituteValue = () => useContext(institutesContext);
