import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Store from "./Redux/State";

import reportWebVitals from "./reportWebVitals";

let rerenderMainPage = (State) => {
  ReactDOM.render(
    <React.StrictMode>
      <App State={State} dispatch={Store.dispatch.bind(Store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderMainPage(Store.getState());

Store.subscribe(rerenderMainPage);

reportWebVitals();
