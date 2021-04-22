import React from 'react';
import UserDesc from './UserDesc/UserDesc';
import UserImage from './userImage/UserImage';
import classes from './UserInfo.module.css';


const UserInfo = () => {
  return (
    <div className={classes.block}>
      <UserImage />
      <UserDesc />
    </div>
  )
}

export default UserInfo;