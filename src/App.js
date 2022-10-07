import "./App.css";
import { MapView, Sidebar, NavigateButton } from "./components";


export const App = () => {

  return (
    <>
      <NavigateButton />
      <div className="App">
        <Sidebar />
        <MapView />
      </div>
    </>
  );
};
