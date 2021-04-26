import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import Users from './Users/Users';




const Dialogs = (props) => {

  let usersElements = 
  props.usersData.map(user => <Users name={user.name} id={user.id} />)

  let messagesElements = 
  props.messagesData.map(mess => <Message message={mess.message} />)

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