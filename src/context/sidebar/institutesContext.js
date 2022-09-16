import { createContext, useEffect } from "react";
// import { setInstitutes } from "../../actions";
// import { getInstitutes } from "../../api/index";

export const institutesContext = createContext({});

// useEffect(() => {
//   const fetchInstitutes = async () => {
//     const institutesRes = await getInstitutes();
//     setInstitutes(institutesRes);
//   };
//   fetchInstitutes();
// }, []);
