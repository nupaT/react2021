import * as axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userDefaultAva from "../../../image/default_ava.jpg";

//создаем классовую компоненту
//даем ей метод getUser
//и обязательный метод render для отрисовки jsx
//теперь чтобы отратиться к props нужно добавлять this т.к.
//пропсы теперь являются частью класса
//2-nd добавил constructor и кинул туда вызов запроса списка юзеров
//!!!! компонента не умирает при переходе на другую страницу
//!!!! надо разобраться

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountUsers(response.data.totalCount);
      });
  }
  //компонента умирает, но state отсается заполненым
  //при размонтировании компоненты в ручную сетаем стейт []
  // также изменил фцнкцию set_state, теперь она не ДОписывает в конец
  //а переписывает полностью state - пока так
  // componentWillUnmount() {
  //   this.props.setUsers([]);
  // }

  onPageChange = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNum}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={classes.body}>
        <div className={classes.pageUsers}>
          {pages.map((page) => {
            return (
              <span
                className={this.props.currentPage === page ? classes.pageUsers__active : ""}
                onClick={() => {
                  this.onPageChange(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>
        {/* отключил вызов списка юзеров по кнопке */}
        {/* <button onClick={this.getUsers}>Get Users</button> */}
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
                <button
                  className={`${user.followed ? classes.subscribed : classes.unsubscribed}`}
                  onClick={() => {
                    this.props.changeSubscribeUser(user.id);
                  }}
                >
                  {user.followed ? "Подписаться" : "Отписаться"}
                </button>
              </div>
            </div>
            <div className={classes.users__desc}>
              <div className={classes.users__name}>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </div>
              {/* пока не приходят эти данные */}
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
