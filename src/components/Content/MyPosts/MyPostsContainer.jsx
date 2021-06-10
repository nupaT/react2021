import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator, changePostTextActionCreator } from "../../../Redux/profile-reducer";
import { connect } from "react-redux";

//создаем 2 функции для State и Dispatch
//забирает state для использования в презентационной компоненте
let mapStateToProps = (state) => {
  // debugger;
  return {
    postsData: state.profilePage.postsData,
    textPost: state.profilePage.textPost,
  };
};

//забирает dispatch(функции) для использования в презентационной компоненте
let mapDispatchToProps = (dispatch) => {
  return {
    //добавляет пост
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    //обновляет поле ввода после каждого изменения в нем
    changePostText: (text) => {
      dispatch(changePostTextActionCreator(text));
    },
  };
};

//создаем контейнерную комноненту
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
