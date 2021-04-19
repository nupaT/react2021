import React from 'react';
import classes from './MyPost.module.css';

const MyPost = () => {
  return (
    <div>
      <div className={classes.block}>
        Post1
      </div>
      <div className={classes.block}>
        Post2
      </div>
    </div>
  );
}

export default MyPost;