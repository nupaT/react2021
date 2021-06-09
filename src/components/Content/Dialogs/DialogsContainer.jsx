import React from "react";
import {
  addMessageActionCreator,
  changeMessageTextActionCreator,
} from "../../../Redux/messages-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  // debugger;
  //создаем переменнуюю state и забираем в нее _State.messagesPage
  let state = props.Store.getState().messagePage;

  //создаем переменную newEnterTextMessage, которая вызывается по методу onChange в textarea
  //с помощью стрелочной функции со параметром event получаем значение из выбранного поля target.value
  //target - выбранное поле, value - значение
  let newEnterTextMessage = (text) => {
    props.Store.dispatch(changeMessageTextActionCreator(text));
  };

  let addMessage = () => {
    props.Store.dispatch(addMessageActionCreator());
  };

  return (
    <Dialogs
      changeTextMessage={newEnterTextMessage}
      addMessage={addMessage}
      textMessage={state.textMessage}
      usersData={state.usersData}
      messagesData={state.messagesData}
    />
  );
};

export default DialogsContainer;
