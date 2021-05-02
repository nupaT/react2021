import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost } from "./Redux/State";

import reportWebVitals from "./reportWebVitals";

export let rerenderMainPage = (State) => {
  ReactDOM.render(
    <React.StrictMode>
      <App State={State} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

reportWebVitals();
