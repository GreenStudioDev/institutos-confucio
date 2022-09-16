import "../App.js";
import { InstitutesList } from "./InstitutesList";
// import { getInstitutes } from "../api/index";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect, useState } from "react";
 // import { setInstitutes } from "../actions/index";
//  import { useGeoInstitutes } from "../helpers/getGeoInstitutes";

export const Sidebar = () => {

  // const institutes = useGeoInstitutes();
  // const [institutes, setInstitutes] = useState([]);

  // useEffect(() => {
  //   const fetchInstitutes = async () => {
  //     const institutesRes = await getInstitutes();
  //     setInstitutes(institutesRes)
  //   }
  //   fetchInstitutes()
  // }, []);

  return (
    <>
      <div className="sidebar">
        <div className="heading">
          <h2>Institutos Confucio en América Latina y el Caribe</h2>
        </div>
        <InstitutesList />
      </div>
    </>
  );
};

