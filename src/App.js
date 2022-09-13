import "./App.css";
import {Maps} from "./components/Map";
import { Sidebar } from "./components/Sidebar";
// import { MapView } from "./components/MapView";

export const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Maps />
    {/* < MapView /> */}
    </div>
  );
};
