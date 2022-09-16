import { InstituteCard } from "./InstituteCard";
import "../App.js";
import { useGeoInstitutes } from "../helpers/getGeoInstitutes";



export const InstitutesList = () => {

  const institutes = useGeoInstitutes();
  console.log("🚀 ~ file: InstitutesList.js ~ line 10 ~ InstitutesList ~ institutes", institutes)

  // const onCardClicked = () => {

  // }

  return (
      <div id="listings" className="listings">
        {institutes.features.map((institute) => {
          return (
            <InstituteCard
              key={institute.properties.id}
              name={institute.properties.type + " " + institute.properties.place}
              city={institute.properties.city_name}
              year={institute.properties.year}
              place={institute.properties.place}
              cooperation={institute.properties.cooperation}
              address={institute.properties.address}
              country={institute.properties.country_name}
              website={institute.properties.website}
              email_1={institute.properties.email_1}
              email_2={institute.properties.email_2}
              phone={institute.properties.phone}
              extension={institute.properties.extension}
              phone_2={institute.properties.phone_2}
              agreement_1={institute.properties.agreement_1}
              agreement_2={institute.properties.agreement_2}
              local_director={institute.properties.local_director}
              local_director_email={institute.properties.local_director_email}
              local_director_profile={institute.properties.local_director_profile}
              chinese_director={institute.properties.chinese_director}
              chinese_director_profile={institute.properties.chinese_director_profile}
              chinese_director_email={institute.properties.chinese_director_email}
              logo={institute.properties.logo}
            />
          )
        })}
            
          
        
      </div>)
};
