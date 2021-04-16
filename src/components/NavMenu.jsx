import React from 'react';
import './NavMenu.css';


const NavMenu = () => {
  return (
    <div className="nav__menu">
          <ul className="nav__menu_list">
            <li className="nav__menu_item"><a href="#!">Profile</a></li>
            <li className="nav__menu_item"><a href="#!">News</a></li>
            <li className="nav__menu_item"><a href="#!">Messages</a></li>
            <li className="nav__menu_item"><a href="#!">Music</a></li>
            <li className="nav__menu_item"><a href="#!">Settings</a></li>
          </ul>
        </div>
  ) 
}

export default NavMenu;