import React, { Component } from 'react';
import './App.css';
import Profile from './components/Content/Profile';
import Header from './components/Header';
import NavMenu from './components/NavMenu';


const App = () => {
  return (

    <div className="bodyBlock">
      <Header />
      <div className="mainBlock">
        <NavMenu />
        <Profile />
      </div>
    </div>
  );
}

export default App;

