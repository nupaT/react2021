import React from 'react';
import classes from './NavMenu.module.css';


const NavMenu = () => {
  return (
    <div className={classes.menu}>
      <ul className={classes.list}>
        <li className={classes.item}><a className={classes.link} href="#!">Profile</a></li>
        <li className={classes.item}><a className={classes.link} href="#!">News</a></li>
        <li className={classes.item}><a className={classes.link} href="#!">Messages</a></li>
        <li className={classes.item}><a className={classes.link} href="#!">Music</a></li>
        <li className={classes.item}><a className={classes.link} href="#!">Settings</a></li>
      </ul>
    </div>
  )
}

export default NavMenu;