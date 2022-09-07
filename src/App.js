import './App.css';
import { Title } from './components/Title';
import { Map } from "./components/Map";
import Sidebar from './components/Sidebar';

export const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Title />
      <Map />
    </div>
  );
}


