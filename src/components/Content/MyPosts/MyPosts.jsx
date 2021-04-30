import React from "react";
import MyPost from "./MyPost/MyPost";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => <MyPost message={post.message} likesCount={post.likesCount} />);

  let postElement = React.createRef();

  let addPost = () => {
    let text = postElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.block}>
      <div className={classes.title}>My Post</div>
      <div className={classes.input__block}>
        <textarea className={classes.input} ref={postElement} type="text" placeholder="Введите ваше сообщение"></textarea>
        <div className={classes.submit__block}>
          <input className={classes.submit} type="submit" name="post" value="Тык" onClick={addPost}></input>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
