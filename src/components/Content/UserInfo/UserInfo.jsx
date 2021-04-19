import React from 'react';
import classes from './UserInfo.module.css';


const UserInfo = () => {
  return (
    <div className={classes.info}>
      <div className={classes.user_foto}>
        <img className={classes.foto} src="https://i.pinimg.com/736x/da/d0/a7/dad0a79db4cd810e3b3aa5c56dfc6742.jpg" />
      </div>
      <div className={classes.user__info}>
        <div className={classes.name}>
          Evgeni A.
      </div>
        <div className={classes.desc}>
          <ul className={classes.list} >
            <li className={classes.item}>Date of Birth: 8 juine</li>
            <li className={classes.item}>City: Vitebsk</li>
            <li className={classes.item}>Education: Magistr of cat affairs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserInfo;