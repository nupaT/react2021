import React from "react";
import { addMessageActionCreator, changeMessageTextActionCreator } from "../../../Redux/State";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import Users from "./Users/Users";

const Dialogs = (props) => {
  let usersElements = props.usersData.map((user) => <Users name={user.name} id={user.id} />);

  let messagesElements = props.messagesData.map((mess) => <Message message={mess.message} />);

  let messageText = React.createRef();

  let newEnterTextMessage = () => {
    let text = messageText.current.value;
    props.dispatch(changeMessageTextActionCreator(text));
  };

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
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
                ref={messageText}
                onChange={newEnterTextMessage}
                type="text"
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
