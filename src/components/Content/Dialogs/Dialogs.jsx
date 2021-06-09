import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import Users from "./Users/Users";

const Dialogs = (props) => {
  //создаем переменную usersElements и пробегаем по объекту usersData
  //забирая в нее user.name и user.id с помощью метода map
  let usersElements = props.usersData.map((user) => <Users name={user.name} id={user.id} />);

  let messagesElements = props.messagesData.map((mess) => <Message message={mess.message} />);

  //создаем переменную newEnterTextMessage, которая вызывается по методу onChange в textarea
  //с помощью стрелочной функции со параметром event получаем значение из выбранного поля target.value
  //target - выбранное поле, value - значение
  let newEnterTextMessage = (event) => {
    let text = event.target.value;
    props.changeTextMessage(text);
  };

  let onAddMessage = () => {
    props.addMessage();
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
                value={props.textMessage}
                placeholder="Ваше сообщение..."
              ></textarea>
            </div>
            <input
              className={classes.submit}
              onClick={onAddMessage}
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
