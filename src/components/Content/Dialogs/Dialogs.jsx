import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import Users from './Users/Users';

let usersData = [
  { id: 1, name: 'User1' },
  { id: 2, name: 'User2' },
  { id: 3, name: 'User3' },
  { id: 4, name: 'User4' },
  { id: 5, name: 'User5' },
];

let messagesData = [
  { id: 1, message: 'Message 1' },
  { id: 2, message: 'Message 2' },
  { id: 3, message: 'Message 3' },
  { id: 4, message: 'Message 4' },
  { id: 5, message: 'Message 5' },
  { id: 6, message: 'Message 6' },
];

let usersElements = usersData
  .map(user => <Users name={user.name} id={user.id} />)


let messagesElements = messagesData
  .map(mess => <Message message={mess.message} />)

const Dialogs = (props) => {
  return (
    <div className={classes.block}>
      <div className={classes.title}>
        Dialogs
        </div>
      <div className={classes.mainDialogs}>
        <div className={classes.users}>
          {usersElements}
        </div>
        <div className={classes.messages}>
          {messagesElements}
        </div>
      </div>
    </div>
  )
}

export default Dialogs;