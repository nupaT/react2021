import React from "react";
import {
  addMessageActionCreator,
  changeMessageTextActionCreator,
} from "../../../Redux/messages-reducer";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import Users from "./Users/Users";

const Dialogs = (props) => {
  //создаем переменнуюю state и забираем в нее _State.messagesPage
  let state = props.Store.getState().messagePage;
  //создаем переменную usersElements и пробегаем по объекту usersData
  //забирая в нее user.name и user.id с помощью метода map
  let usersElements = state.usersData.map((user) => <Users name={user.name} id={user.id} />);

  let messagesElements = state.messagesData.map((mess) => <Message message={mess.message} />);

  //создаем переменную newEnterTextMessage, которая вызывается по методу onChange в textarea
  //с помощью стрелочной функции со параметром event получаем значение из выбранного поля target.value
  //target - выбранное поле, value - значение
  let newEnterTextMessage = (event) => {
    let text = event.target.value;
    props.Store.dispatch(changeMessageTextActionCreator(text));
  };

  let addMessage = () => {
    props.Store.dispatch(addMessageActionCreator());
  };

  return (
    <div className={classes.block}>
      <div className={classes.title}>Dialogs</div>
      <div className={classes.mainDialogs}>
        <div className={classes.users}>{usersElements}</div>
        <div className={classes.messages}>
          <div>{messagesElements}</div>
          <div className={classes.message__add}>
            <div className={classes.message__textarea}>
              <textarea
                className={classes.input}
                onChange={newEnterTextMessage}
                type="text"
                value={state.textMessage}
                placeholder="Ваше сообщение..."
              ></textarea>
            </div>
            <input
              className={classes.submit}
              onClick={addMessage}
              type="submit"
              name="dialogPost"
              value="Отправить"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
