import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Store from "./Redux/Store";
import Store from "./Redux/redux-store";

import reportWebVitals from "./reportWebVitals";

let rerenderMainPage = (State) => {
  // debugger;
  ReactDOM.render(
    <React.StrictMode>
      <App State={State} Store={Store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderMainPage(Store.getState());

Store.subscribe(() => {
  let state = Store.getState();
  rerenderMainPage(state);
});

reportWebVitals();
