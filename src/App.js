import React, { Component } from 'react';
import './App.css';


const App = () => {
  return (

    <div className="bodyBlock">
      <div className="headerBlock">
        <img className = "header__logo" src = "https://car-logos.net/wp-content/uploads/2018/09/arash-logo.jpg" />
        Header
      </div>

      <div className="mainBlock">
        <div className="nav__menu">
          <ul>
            <li><a href="#!">Profile</a></li>
            <li><a href="#!">News</a></li>
            <li><a href="#!">Messages</a></li>
            <li><a href="#!">Music</a></li>
            <li><a href="#!">Settings</a></li>
          </ul>
        </div>
        <div className="content">
          <img className = "content__image" src = "https://static8.depositphotos.com/1370441/848/i/600/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg" />
          <div className = "content__info_user">
            <div className = "content__user_foto">
              <img className="user__foto" src="https://i.pinimg.com/736x/da/d0/a7/dad0a79db4cd810e3b3aa5c56dfc6742.jpg" />
            </div>
            <div className="content__user_desc">
              <div className="user__name">
                Evgeni A.
              </div>
              <div className="user__desc">
                <ul className="user__desc_list">
                  <li className="user__desc_item">Date of Birth: 8 juine</li>
                  <li className="user__desc_item">City: Vitebsk</li>
                  <li className="user__desc_item">Education: Magistr</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;

