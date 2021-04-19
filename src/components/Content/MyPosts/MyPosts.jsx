import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={classes.block}>
      <div className={classes.title}>My Post</div>
      <textarea className={classes.input} type="text" ></textarea>
      <input className={classes.submit} type="submit" value="Тык"></input>
    </div>
  );
}

export default MyPosts;