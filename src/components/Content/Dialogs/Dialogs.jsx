import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={classes.block}>
      <div className={classes.title}> 
        Dialogs
        </div>
      <div className={classes.mainDialogs}> 
        <div className={classes.users}>
          <ul>
            <li className={classes.list}>User1</li>
            <li className={classes.list}>User2</li>
            <li className={classes.list}>User3</li>
          </ul>
        </div>
        <div className={classes.mess}>
          <ul>
            <li className={classes.list}>Mess1</li>
            <li className={classes.list}>Mess2</li>
            <li className={classes.list}>Mess3</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Dialogs;