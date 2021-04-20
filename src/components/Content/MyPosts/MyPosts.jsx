import React from 'react';
import MyPost from './MyPost/MyPost';
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={classes.block}>
      <div className={classes.title}>My Post</div>
      <div className={classes.input__block}>
        <textarea className={classes.input} type="text" placeholder="Введите ваше сообщение"></textarea>
        <div className={classes.submit__block}><input className={classes.submit} type="submit" name="post" value="Тык"></input></div>
      </div>
      <MyPost message="Hi, how are you?"/>
      <MyPost message="Hello! I'm fine!"/>
    </div>
  );
}

export default MyPosts;