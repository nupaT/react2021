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
            <div className={classes.list}>User1</div>
            <div className={classes.list}>User2</div>
            <div className={classes.list}>User3</div>
        </div>
        <div className={classes.mess}>
            <div className={classes.list}>Mess1</div>
            <div className={classes.list}>Mess2</div>
            <div className={classes.list}>Mess3</div>
        </div>

      </div>
    </div>
  )
}

export default Dialogs;