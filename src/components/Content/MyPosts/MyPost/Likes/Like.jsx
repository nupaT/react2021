import React from 'react';
import classes from './Like.module.css';

const Likes = (props) => {
  return (
      <div className={classes.block}>
          <span>Likes {props.count}</span>
      </div>
  );
}

export default Likes;