import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <div className={classes.block}>
      <img
        className={classes.image}
        src="https://static8.depositphotos.com/1370441/848/i/600/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg"
      />
      <UserInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
