import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainBlock from './components/MainBlock';


const App = () => {
  return (

    <div className="bodyBlock">
      <Header />
      <MainBlock />
    </div>
  );
}

export default App;

