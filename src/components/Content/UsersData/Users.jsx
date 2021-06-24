import * as axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userDefaultAva from "../../../image/default_ava.jpg";

//создаем классовую компоненту
//даем ей метод getUser
//и обязательный метод render для отрисовки jsx
//теперь чтобы отратиться к props нужно добавлять this т.к.
//пропсы теперь являются частью класса

class Users extends React.Component {
  getUsers = () => {
    if (this.props.user.length === 0) {
      console.log("true");
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
        this.props.setUsers(response.data.items);
      });
    }
  };

  render() {
    return (
      <div className={classes.body}>
        <button onClick={this.getUsers}>Get Users</button>
        {this.props.user.map((user) => (
          <div key={user.id} className={classes.users__card}>
            <div className={classes.users__ava}>
              <div className={classes.ava}>
                <img
                  src={user.photos.small != null ? user.photos.small : userDefaultAva}
                  alt="picture"
                />
              </div>
              <div className={classes.users_subscribe}>
                {user.followed ? (
                  <button
                    className={classes.subscribed}
                    onClick={() => {
                      this.props.unSubscribeUser(user.id);
                    }}
                  >
                    Отписаться
                  </button>
                ) : (
                  <button
                    className={classes.unsubscribed}
                    onClick={() => {
                      this.props.subscribeUser(user.id);
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
  }
}

export default Users;
