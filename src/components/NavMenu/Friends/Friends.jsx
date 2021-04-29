import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./Friends.module.css"

const Friends = (props) => {
  return (
    <div className={classes.friends}>
      <NavLink className={classes.friends__desc} to={"/Dialogs/" + props.id} activeClassName={classes.friends__active}>
        <img
          className={classes.friends__img}
          src="data:image/jpeg;base64,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"
          alt=""
        />
        {props.name}
      </NavLink>
    </div>
  )
}

export default Friends
