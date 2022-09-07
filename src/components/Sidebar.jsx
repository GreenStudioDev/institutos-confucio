import "../App.js";
import { connect } from "react-redux";
import { InstitutesList } from "./InstitutesList";
import { getInstitutes } from "../api/index";
import { useEffect, 
    // useState
 } from "react";
import { setInstitutes as setInstitutesActions } from "../actions/index";

const Sidebar = ({ institutes, setInstitutes }) => {
  console.log("🚀 ~ file: Sidebar.jsx ~ line 11 ~ Sidebar ~ institutes", institutes)
  //   const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    const fetchInstitutes = async () => {
      const institutesRes = await getInstitutes();
      setInstitutes(institutesRes);
    };
    fetchInstitutes();
  }, []);

  return (
    <>
      <div className="sidebar">
        <div className="heading">
          <h2>Ubicaciones</h2>
        </div>
        <InstitutesList institutes={institutes} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  institutes: state.institutes,
});

const mapDispatchToProps = (dispatch) => ({
  setInstitutes: (value) => dispatch(setInstitutesActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
