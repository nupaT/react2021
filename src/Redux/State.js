import React from "react";

let State = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hi, howe are you?", likesCount: 2 },
      { id: 2, message: "Hello! I'm fine!", likesCount: 12 },
      { id: 3, message: "Me too!", likesCount: 18 },
      { id: 4, message: "Go!", likesCount: 38 },
    ],
  },

  messagePage: {
    usersData: [
      { id: 1, name: "User1" },
      { id: 2, name: "User2" },
      { id: 3, name: "User3" },
      { id: 4, name: "User4" },
      { id: 5, name: "User5" },
      { id: 6, name: "User6" },
    ],

    messagesData: [
      { id: 1, message: "Message 1" },
      { id: 2, message: "Message 2" },
      { id: 3, message: "Message 3" },
      { id: 4, message: "Message 4" },
      { id: 5, message: "Message 5" },
      { id: 6, message: "Message 6" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };

  State.profilePage.postsData.push(newPost);
};

export default State;
