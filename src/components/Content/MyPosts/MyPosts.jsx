import React from "react";
import MyPost from "./MyPost/MyPost";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  // debugger;
  let postsElements = props.postsData.map((post) => (
    <MyPost message={post.message} likesCount={post.likesCount} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let newEnterTextPost = (event) => {
    let text = event.target.value;
    props.changePostText(text);
  };

  return (
    <div className={classes.block}>
      <div className={classes.title}>My Post</div>
      <div className={classes.input__block}>
        <textarea
          className={classes.input}
          onChange={newEnterTextPost}
          value={props.textPost}
          placeholder="Ваше сообщение..."
        />
        <div className={classes.submit__block}>
          <input
            className={classes.submit}
            onClick={onAddPost}
            type="submit"
            name="post"
            value="Тык"
          ></input>
        </div>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
