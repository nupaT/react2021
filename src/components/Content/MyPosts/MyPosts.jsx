import React from 'react';
import MyPost from './MyPost/MyPost';
import classes from './MyPosts.module.css';

let postsData = [
  { id: 1, message: 'Hi, howe are you?', likesCount: 2 },
  { id: 2, message: "Hello! I'm fine!", likesCount: 12 },
  { id: 3, message: 'Me too!', likesCount: 18 },
  { id: 3, message: 'Go!', likesCount: 38 },
]

let postsElement = postsData
        .map(post => <MyPost message={post.message} likesCount={post.likesCount} />);

const MyPosts = () => {
  return (
    <div className={classes.block}>
      <div className={classes.title}>My Post</div>
      <div className={classes.input__block}>
        <textarea className={classes.input} type="text" placeholder="Введите ваше сообщение"></textarea>
        <div className={classes.submit__block}><input className={classes.submit} type="submit" name="post" value="Тык"></input></div>
      </div>
      {postsElement}
    </div>
  );
}

export default MyPosts;