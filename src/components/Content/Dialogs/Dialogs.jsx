import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Users = (props) => {
  return (
    <div className={`${classes.list} ${classes.user}`}>
      <NavLink activeClassName={classes.active} to={"/Dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={`${classes.list} ${classes.message}`}>
      {props.message}
    </div>
  );
}

let usersData = [
  { id: 1, name: 'user1' },
  { id: 2, name: 'user2' },
  { id: 3, name: 'user3' },
  { id: 4, name: 'user4' },
  { id: 5, name: 'user5' },
];

let messagesData = [
  { id: 1, message: 'Message 1' },
  { id: 2, message: 'Message 2' },
  { id: 3, message: 'Message 3' },
  { id: 4, message: 'Message 4' },
  { id: 5, message: 'Message 5' },
];

const Dialogs = (props) => {
  return (
    <div className={classes.block}>
      <div className={classes.title}>
        Dialogs
        </div>
      <div className={classes.mainDialogs}>
        <div className={classes.users}>
          <Users name="User1" id="1" />
          <Users name="User2" id="2" />
          <Users name="User3" id="3" />
          <Users name="User4" id="4" />
          <Users name="User5" id="5" />
        </div>
        <div className={classes.messages}>
          <Message message="Hi" />
          <Message message="Mess2" />
          <Message message="Mess3" />
        </div>
      </div>
    </div>
  )
}

export default Dialogs;