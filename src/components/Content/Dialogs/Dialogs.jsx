import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Users = (props) => {
  return (
    <div className={`${classes.list} ${classes.user}`}>
      <NavLink to={"/Dialogs/" + props.name}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={`${classes.list} ${classes.mess}`}>
      {props.mess}
    </div>
  );
}

const Dialogs = (props) => {
  return (
    <div className={classes.block}>
      <div className={classes.title}>
        Dialogs
        </div>
      <div className={classes.mainDialogs}>
        <div className={classes.users}>
          <Users name="User1" />
          <Users name="User2" />
          <Users name="User3" />
        </div>
        <div className={classes.messages}>
          <Message mess="Hi" />
          <Message mess="Mess2" />
          <Message mess="Mess3" />
        </div>

      </div>
    </div>
  )
}

export default Dialogs;