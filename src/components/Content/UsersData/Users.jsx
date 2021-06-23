import * as axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userDefaultAva from "../../../image/default_ava.jpg";

const Users = (props) => {
  // debugger;
  //ЗАКОМЕНТИЛ потмоучто вызывается всервано 2 раза еще не разобрался почему

  if (props.user.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      props.setUsers(response.data.items);
    });
  }
  /*
    props.setUsers([
      {
        id: 1,
        userAva:
          "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg",
        userName: "Evgeni",
        userStatus: "I'm best!",
        userLocation: { userCountry: "Belarus", userCity: "Vitebsk" },
        subscribe: true,
      },
      {
        id: 2,
        userAva:
          "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg",
        userName: "Dmitry",
        userStatus: "I'm best of the best!",
        userLocation: { userCountry: "Russia", userCity: "Moskow" },
        subscribe: true,
      },
      {
        id: 3,
        userAva:
          "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg",
        userName: "Irina",
        userStatus: "I'm fine!",
        userLocation: { userCountry: "Ukrain", userCity: "Kiiv" },
        subscribe: false,
      },
      {
        id: 4,
        userAva:
          "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg",
        userName: "Olga",
        userStatus: "I'm woman-cat!",
        userLocation: { userCountry: "USA", userCity: "New York" },
        subscribe: false,
      },
    ]);
  }
*/
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
