import React from "react";
import MyPost from "./MyPost/MyPost";
import classes from "./MyPosts.module.css";
import { addPostActionCreator, changePostTextActionCreator } from "../../../Redux/State";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <MyPost message={post.message} likesCount={post.likesCount} />
  ));

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let newEnterTextPost = (event) => {
    let text = event.target.value;
    props.dispatch(changePostTextActionCreator(text));
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
            onClick={addPost}
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
