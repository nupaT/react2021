import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator, changePostTextActionCreator } from "../../../Redux/profile-reducer";

const MyPostsContainer = (props) => {
  let state = props.Store.getState();

  let addPost = () => {
    props.Store.dispatch(addPostActionCreator());
  };

  let newEnterTextPost = (text) => {
    props.Store.dispatch(changePostTextActionCreator(text));
  };

  return (
    <MyPosts
      changePostText={newEnterTextPost}
      addPost={addPost}
      postsData={state.profilePage.postsData}
      textPost={state.profilePage.textPost}
    />
  );
};

export default MyPostsContainer;
