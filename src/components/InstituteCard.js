import "../App.js";
// import { useGeoInstitutes } from "../helpers/getGeoInstitutes.js";


export const InstituteCard = ({
  name,
  city,
  year,
  place,
  cooperation,
  address,
  country,
  website,
  email_1,
  email_2,
  phone,
  extension,
  phone_2,
  agreement_1,
  agreement_2,
  local_director,
  local_director_email,
  local_director_profile,
  chinese_director,
  chinese_director_email,
  chinese_director_profile,
  logo,
}) => {
  return (
    <>
        {/* <a href="#"> */}
      <div className="item">
          <div className="title">{name}</div>
        <div>{address}</div>
        <div>{city}</div>
        {/* <div>{country}</div>
        <div>Desde: {year}</div>
        <div>{place}</div>
        <div>Cooperación: {cooperation}</div>
        <a href={website}>
        <div>{website}</div>
        </a>
        <div>{email_1}</div>
        <div>{email_2}</div>
        <div>Teléfono: {phone}</div>
        <div>{extension}</div>
        <div>{phone_2}</div>
        <div>{agreement_1}</div>
        <div>{agreement_2}</div>
        <div>{local_director}</div>
        <div>{local_director_email}</div>
        <div>{local_director_profile}</div>
        <div>{chinese_director}</div>
        <div>{chinese_director_email}</div>
        <div>{chinese_director_profile}</div>
      <img src={logo} alt={"logo " + name} className="logo" /> */}
      </div>
      {/* </a> */}
    </>
  );
};
