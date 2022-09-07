import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { institutesReducer } from "./reducers/institutes";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(institutesReducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
