import { connect } from "react-redux";
import {
  addMessageActionCreator,
  changeMessageTextActionCreator,
} from "../../../Redux/messages-reducer";
import Dialogs from "./Dialogs";

//создаем 2 функции
//первая забирает state - данные и возвращает их
let mapStateToProps = (state) => {
  return {
    messagesData: state.messagePage.messagesData,
    usersData: state.messagePage.usersData,
    textMessage: state.messagePage.textMessage,
  };
};

//вторая забирает callBack'и (наши функции которые вызываются в презентационной компоненте)
let mapDispatchToProps = (dispatch) => {
  return {
    changeTextMessage: (text) => {
      dispatch(changeMessageTextActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

//создаем контейнерную компоненту с помощью connect
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
