import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import NavMenu from "./components/NavMenu/NavMenu";

import Profile from "./components/Content/Profile";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="bodyBlock">
        <Header />
        <div className="mainBlock">
          <NavMenu usersData={props.State.messagePage.usersData} />
          <Route
            path="/Profile"
            render={() => (
              <Profile
                postsData={props.State.profilePage.postsData}
                dispatch={props.dispatch}
                textPost={props.State.profilePage.textPost}
              />
            )}
          />
          <Route
            path="/Dialogs"
            render={() => (
              <Dialogs
                usersData={props.State.messagePage.usersData}
                messagesData={props.State.messagePage.messagesData}
                dispatch={props.dispatch}
                textMessage={props.State.messagePage.textMessage}
              />
            )}
          />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
