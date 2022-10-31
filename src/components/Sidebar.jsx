import "../App.css";
import { InstituteList } from ".";


export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="heading">
          <h2>Institutos Confucio en América Latina y el Caribe</h2>
        </div>
        <div className="listings">
        <InstituteList/>
        </div> 
      </div>
    </>
  );
};

