import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const Users = (props) => {
  return (
    <div className={`${classes.list} ${classes.user}`}>
      <NavLink activeClassName={classes.active} to={"/Dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

export default Users;