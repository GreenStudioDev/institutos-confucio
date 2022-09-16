import "./App.css";
import { MapView } from "./components/MapView";
// import { ApiTest } from "./components/ApiTest";
import { Sidebar } from "./components/Sidebar";
// import { InstitutesProvider } from "./context/sidebar/institutesProvider";
// import { institutesReducer } from "./context/sidebar/institutesReducer";
// import { getInstitutes } from "./api";
// import { useEffect } from "react";

export const App = () => {
  // const initialState = {
  //   isLoading: true,
  //   institutes: [],
  // };

  return (
    // <InstitutesProvider initialState={initialState} reducer={institutesReducer}>
    <div className="App">
      {/* <ApiTest />  */}
      <Sidebar />
      <MapView />
    </div>
    // </InstitutesProvider>
  );
};
