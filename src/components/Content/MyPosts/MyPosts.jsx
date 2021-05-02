import React from "react";
import MyPost from "./MyPost/MyPost";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <MyPost message={post.message} likesCount={post.likesCount} />
  ));

  let postElement = React.createRef();

  let addPost = () => {
    let text = postElement.current.value;
    props.addPost(text);
    props.changePostText("");
  };

  let newEnterText = () => {
    let text = postElement.current.value;
    postElement.current.value = props.changePostText(text);
  };

  return (
    <div className={classes.block}>
      <div className={classes.title}>My Post</div>
      <div className={classes.input__block}>
        <textarea
          className={classes.input}
          onChange={newEnterText}
          ref={postElement}
          value={props.textPost}
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
