import * as axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userDefaultAva from "../../../image/default_ava.jpg";

const Users = (props) => {
  debugger;
  //вызывается setUsers 2 раза!!!! еще не разобрался почему
  //23.06.21 всеравно попадает 2 раза!!

  if (props.user.length === 0) {
    console.log("true");
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      props.setUsers(response.data.items);
    });
  }

  return (
    <div className={classes.body}>
      {props.user.map((user) => (
        <div key={user.id} className={classes.users__card}>
          <div className={classes.users__ava}>
            <div className={classes.ava}>
              <img
                src={user.photos.smoll != null ? user.photos.smoll : userDefaultAva}
                alt="picture"
              />
            </div>
            <div className={classes.users_subscribe}>
              {user.followed ? (
                <button
                  className={classes.subscribed}
                  onClick={() => {
                    props.unSubscribeUser(user.id);
                  }}
                >
                  Отписаться
                </button>
              ) : (
                <button
                  className={classes.unsubscribed}
                  onClick={() => {
                    props.subscribeUser(user.id);
                  }}
                >
                  Подписаться
                </button>
              )}
            </div>
          </div>
          <div className={classes.users__desc}>
            <div className={classes.users__name}>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            {/* <div className={classes.users__location}>
              <div>{user.userLocation.userCountry}</div>
              <div>{user.userLocation.userCity}</div>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
