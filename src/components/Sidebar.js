import "../App.js";
import { useSelector, useDispatch } from "react-redux";
import { InstitutesList } from "./InstitutesList";
import { getInstitutes } from "../api/index";
import { useEffect, 
    // useState
 } from "react";
import { setInstitutes } from "../actions/index";

export const Sidebar = () => {

  const institutes = useSelector((state) => state.institutes);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInstitutes = async () => {
      const institutesRes = await getInstitutes();
      dispatch(setInstitutes(institutesRes));
    };
    fetchInstitutes();
  }, [dispatch]);

  return (
    <>
      <div className="sidebar">
        <div className="heading">
          <h2>Institutos Confucio América Latina y el Caribe</h2>
        </div>
        <InstitutesList institutes={institutes} />
      </div>
    </>
  );
};

