import { InstituteCard } from "./InstituteCard.jsx";

export const InstitutesList = ({ institutes }) => {
  console.log(
    "🚀 ~ file: InstitutesList.jsx ~ line 5 ~ InstitutesList ~ institutes",
    institutes
  );
  return (
    <>
      <div>
        {institutes.map((institute) => {
          return (
            <InstituteCard
              key={institute.institute_id}
              name={institute.type_spa + " " + institute.place_spa}
              city={institute.city_name_spa}
              year={institute.year}
              place={institute.place_spa}
              cooperation={institute.Cooperation_spa}
            />
          );
        })}
      </div>
    </>
  );
};
