import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./NavMenu.module.css"
import Friends from "./Friends/Friends"

const NavMenu = (props) => {
  let FriendsElement = props.usersData.map((userName) => <Friends name={userName.name} />)

  return (
    <div className={classes.block}>
      <div className={classes.block__menu}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <NavLink className={classes.link} to="/Profile" activeClassName={classes.active}>
              Profile
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={classes.link} to="/Dialogs" activeClassName={classes.active}>
              Messages
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={classes.link} to="/News" activeClassName={classes.active}>
              News
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={classes.link} to="/Music" activeClassName={classes.active}>
              Music
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink className={classes.link} to="/Settings" activeClassName={classes.active}>
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={classes.block__friends}>
        <div className={classes.friends__title}>Friends</div>
        <div className={classes.friends__element}>{FriendsElement}</div>
      </div>
    </div>
  )
}

export default NavMenu
