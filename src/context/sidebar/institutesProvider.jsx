import React, { useContext, useReducer } from "react";
import { institutesContext, institutesState, institutesReducer } from "..";
import { institutesApi } from "../../api";
// import { useGeoInstitutes } from "../../helpers";

export const InstitutesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(institutesReducer, institutesState);

  const getInstitutes = async () => {
    const resp = await institutesApi
      .get("/institutes")
      console.log("🚀 ~ file: institutesProvider.jsx ~ line 12 ~ getInstitutes ~ resp", resp)
      // .then((res) => res.data)
      // .catch((err) => console.log(err));
    dispatch({
      type: "getInstitutes",
      payload: resp,
    });

    return resp;
  };

  // useEffect(() => {
  //   dispatch({
  //     type: "getInstitutes",
  //     payload: getInstitutes,
  //   });
  // }, []);

  return (
    <institutesContext.Provider
      value={{
        ...state,
        //Methods
        getInstitutes,
      }}
    >
      {children}
    </institutesContext.Provider>
  );
};

export const useInstituteValue = () => useContext(institutesContext);
