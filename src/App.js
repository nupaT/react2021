import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import NavMenuContainer from "./components/NavMenu/NavMenuContainer";

import Profile from "./components/Content/Profile";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";

const App = () => {
  // debugger;
  return (
    <BrowserRouter>
      <div className="bodyBlock">
        <Header />
        <div className="mainBlock">
          <NavMenuContainer />
          <Route path="/Profile" render={() => <Profile />} />
          <Route path="/Dialogs" render={() => <DialogsContainer />} />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
