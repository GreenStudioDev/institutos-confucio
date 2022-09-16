import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import mapboxgl from 'mapbox-gl';
// import { institutesReducer } from "./reducers/institutes";
// import { Provider } from "react-redux";
// import { legacy_createStore as createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const storeReducer = createStore(
//   institutesReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5oaXNhIiwiYSI6ImNsN3Q1aTJpdDBudWIzdG9nYjd3bXZqZzgifQ.Ho_Dm0XJw1Wxyz8epkCkvA';

root.render(
  <React.StrictMode>
    {/* <Provider store={storeReducer}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
);
