import React from 'react';
import classes from './UserImage.module.css';


const UserImage = () => {
  return (
      <div className={classes.user_foto}>
        <img className={classes.foto} src="https://i.pinimg.com/736x/da/d0/a7/dad0a79db4cd810e3b3aa5c56dfc6742.jpg" />
      </div>
  )
}

export default UserImage;