import { institutesjson } from "../helpers";


export const useGetListData = () => {

  const institutes = institutesjson

  let countriesCompleteArray = institutes.features.map((institute) => {
    return institute.properties.country_name;
  });
  let countriesArray = [];

  //Remove duplicates from countriesCompleteArray
  for (let i = 0; i < countriesCompleteArray.length; i++) {
    if (!countriesArray.includes(countriesCompleteArray[i])) {
      countriesArray.push(countriesCompleteArray[i]);
    }
  }
  
  let listData = {
    countries: countriesArray?.map((country) => {
      const institutesA = institutesjson;
      return {
        countriesInstitutes: {
          name: country,
          institutes: institutesA.features
            .map((institute) => {
              return {
                institute: {
                  institute_name:
                    institute.properties.type +
                    " " +
                    institute.properties.place,
                  institute_address: institute.properties.address,
                  institute_city: institute.properties.city_name,
                  institute_country: institute.properties.country_name,
                  institute_coords: institute.geometry.coordinates,
                },
              };
            })
            .filter(
              (institute) => institute.institute.institute_country === country
            ),
        },
      };
    }),
  };

  return listData.countries;
};
