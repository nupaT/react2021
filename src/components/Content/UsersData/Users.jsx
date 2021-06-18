import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={classes.body}>
      {props.user.map((user) => (
        <div key={user.id} className={classes.users__card}>
          <div className={classes.users__ava}>
            <div className={classes.ava}>
              <img src={user.userAva} alt="" />
            </div>
            <div className={classes.users_subscribe}>
              <button>Тык</button>
            </div>
          </div>
          <div className={classes.users__desc}>
            <div className={classes.users__name}>
              <div>{user.userName}</div>
              <div>{user.userStatus}</div>
            </div>
            <div className={classes.users__location}>
              <div>{user.userLocation.userCountry}</div>
              <div>{user.userLocation.userCity}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
