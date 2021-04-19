import React from 'react';
import './App.css';
import Profile from './components/Content/Profile';
import Header from './components/Header/Header';
import NavMenu from './components/NavMenu/NavMenu';


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

