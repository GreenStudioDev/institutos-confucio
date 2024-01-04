import React, { useContext, useEffect, useReducer, useState } from "react";
import { institutesContext, institutesState, institutesReducer } from "..";
import { getInstitutes } from "../../api";

export const InstitutesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(institutesReducer, institutesState);
  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    const fetchInstitutes = async () => {
      const institutesData = await getInstitutes();
      const institutesRes = {
        type: "FeatureCollection",
        features: institutesData.map((institute) => {
          return {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [parseFloat(institute.long), parseFloat(institute.lat)],
            },
            properties: {
              id: institute.institute_id,
              cooperation: institute.Cooperation_spa,
              address: institute.address,
              agreement_1: institute.agreement_1_spa,
              agreement_2: institute.agreement_2_spa,
              chinese_director: institute.chinese_director,
              chinese_director_email: institute.chinese_director_email,
              chinese_director_profile: institute.chinese_director_profile_spa,
              city_name: institute.city_name_spa,
              coords: institute.coordinates,
              country_name: institute.country_name_spa,
              email_1: institute.email_1,
              email_2: institute.email_2,
              extension: institute.extension,
              institute_id: institute.institute_id,
              local_director: institute.local_director,
              local_director_email: institute.local_director_email,
              local_director_profile: institute.local_director_profile_spa,
              logo: institute.logo,
              phone: institute.phone,
              phone_2: institute.phone_2,
              place: institute.place_spa,
              type: institute.type_spa,
              website: institute.website,
              year: institute.year,
            },
          };
        }),
      };

      setInstitutes(institutesRes);
    };
    fetchInstitutes();
  }, []);

  useEffect(() => {
    dispatch({
      type: "getInstitutes",
      payload: institutes,
    });
  }, [institutes]);

  return (
    <institutesContext.Provider
      value={{
        ...state,
        institutes,
      }}
    >
      {children}
    </institutesContext.Provider>
  );
};

export const useInstituteValue = () => useContext(institutesContext);
