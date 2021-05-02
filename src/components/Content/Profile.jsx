import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  return (
    <div className={classes.block}>
      <img
        className={classes.image}
        src="https://static8.depositphotos.com/1370441/848/i/600/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg"
      />
      <UserInfo />
      <MyPosts postsData={props.postsData} addPost={props.addPost} textPost={props.textPost} changePostText={props.changePostText} />
    </div>
  );
};

export default Profile;
