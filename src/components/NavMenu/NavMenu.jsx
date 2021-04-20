import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavMenu.module.css';


const NavMenu = () => {
  return (
    <div className={classes.block}>
      <ul className={classes.list}>
        <li className={classes.item}><NavLink className={classes.link} to="/Profile" activeClassName={classes.active}>Profile</NavLink></li>
        <li className={classes.item}><NavLink className={classes.link} to="/Dialogs" activeClassName={classes.active}>Messages</NavLink></li>
        <li className={classes.item}><NavLink className={classes.link} to="/News" activeClassName={classes.active}>News</NavLink></li>
        <li className={classes.item}><NavLink className={classes.link} to="/Music" activeClassName={classes.active}>Music</NavLink></li>
        <li className={classes.item}><NavLink className={classes.link} to="/Settings" activeClassName={classes.active}>Settings</NavLink></li>
      </ul>
    </div>
  )
}

export default NavMenu;