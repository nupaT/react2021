import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

let postsData = [
  { id: 1, message: "Hi, howe are you?", likesCount: 2 },
  { id: 2, message: "Hello! I'm fine!", likesCount: 12 },
  { id: 3, message: "Me too!", likesCount: 18 },
  { id: 4, message: "Go!", likesCount: 38 },
];

let usersData = [
  { id: 1, name: "User1" },
  { id: 2, name: "User2" },
  { id: 3, name: "User3" },
  { id: 4, name: "User4" },
  { id: 5, name: "User5" },
];

let messagesData = [
  { id: 1, message: "Message 1" },
  { id: 2, message: "Message 2" },
  { id: 3, message: "Message 3" },
  { id: 4, message: "Message 4" },
  { id: 5, message: "Message 5" },
  { id: 6, message: "Message 6" },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      usersData={usersData}
      messagesData={messagesData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
