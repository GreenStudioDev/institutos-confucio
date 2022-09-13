import { InstituteCard } from "./InstituteCard";
import "../App.js";

export const InstitutesList = ({ institutes }) => {
  return (
    <>
      <div id="listings" className="listings">
        {institutes.map((institute) => {
          return (
            <InstituteCard
              key={institute.institute_id}
              name={institute.type_spa + " " + institute.place_spa}
              city={institute.city_name_spa}
              year={institute.year}
              place={institute.place_spa}
              cooperation={institute.Cooperation_spa}
              address={institute.address}
              country={institute.country_name_spa}
              website={institute.website}
              email_1={institute.email_1}
              email_2={institute.email_2}
              phone={institute.phone}
              extension={institute.extension}
              phone_2={institute.phone_2}
              agreement_1={institute.agreement_1_spa}
              agreement_2={institute.agreement_2_spa}
              local_director={institute.local_director}
              local_director_email={institute.local_director_email}
              local_director_profile={institute.local_director_profile_spa}
              chinese_director={institute.chinese_director}
              chinese_director_profile={institute.chinese_director_profile_spa}
              chinese_director_email={institute.chinese_director_email}
              logo={institute.logo}
            />
          );
        })}
      </div>
    </>
  );
};
