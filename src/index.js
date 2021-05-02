import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, addMessage, changePostText } from "./Redux/State";
import State, { updateFunction } from "./Redux/State";

import reportWebVitals from "./reportWebVitals";

let rerenderMainPage = (State) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        State={State}
        addPost={addPost}
        addMessage={addMessage}
        changePostText={changePostText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderMainPage(State);

updateFunction(rerenderMainPage);

reportWebVitals();
