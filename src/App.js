// import { useContext } from "react";
import "./App.css";
import {
  MapView,
  Sidebar,
  NavigateButton,
  InstitutesModal,
  // Loading,
} from "./components";
// import { institutesContext } from "./context";


export const App = () => {
  // For better performance this app uses data from institutes.json file located at helpers folder. 
  // In order to update institutes.json check in app state context to get the latest object updated from the api, then copy the whole object and paste it into institutes.json file.
  
  // const { institutes } = useContext(institutesContext);

  return (
    <div className="App">
      <InstitutesModal />
      <NavigateButton />
      <div className="layout">
        <Sidebar />
        <MapView />
      </div>
    </div>
  );
};

