import React from 'react';
import classes from './NavMenu.module.css';


const NavMenu = () => {
  return (
    <div className={classes.menu}>
      <ul className={classes.list}>
        <li className={classes.item}><a href="#!">Profile</a></li>
        <li className={classes.item}><a href="#!">News</a></li>
        <li className={classes.item}><a href="#!">Messages</a></li>
        <li className={classes.item}><a href="#!">Music</a></li>
        <li className={classes.item}><a href="#!">Settings</a></li>
      </ul>
    </div>
  )
}

export default NavMenu;