import "../App.css";
// import { InstitutesList } from ".";
import { InstituteCardCopy } from "./InstituteCardCopy";


export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="heading">
          <h2>Institutos Confucio en América Latina y el Caribe</h2>
        </div>
        <div className="listings">
        {/* <InstitutesList /> */}
        <InstituteCardCopy/>
        </div> 
      </div>
    </>
  );
};

