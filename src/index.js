import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/redux-store";

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

// debugger;
ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  // </React.StrictMode>, 
  document.getElementById("root")
);

// rerenderMainPage(Store.getState());

// Store.subscribe(() => {
//   let state = Store.getState();
//   rerenderMainPage(state);
// });

// убрали перерисовку всего документа, т.к. connect сам
//перерисовывает только тот элемент который изменился
// store.subscribe(() => {
//   rerenderMainPage();
// });

reportWebVitals();
