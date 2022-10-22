import "./App.css";
import {
  MapView,
  Sidebar,
  NavigateButton,
  InstitutesModal,
} from "./components";

export const App = () => {
  return (
    <div className="App">
      <InstitutesModal />
      <NavigateButton />
      <Sidebar />
      <MapView />
    </div>
  );
};
