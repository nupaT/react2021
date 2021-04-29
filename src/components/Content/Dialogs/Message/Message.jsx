import React from "react"
import classes from "./../Dialogs.module.css"

const Message = (props) => {
  return <div className={`${classes.list} ${classes.message}`}>{props.message}</div>
}

export default Message
