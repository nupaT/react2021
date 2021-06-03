const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

const messagesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMess = {
        id: state.messagesData.length + 1,
        message: state.textMessage,
      };
      state.messagesData.push(newMess);
      state.textMessage = "";
      break;
    //изменение текста в поле ввода сообщения
    case CHANGE_MESSAGE_TEXT:
      state.textMessage = action.messageText;
      break;

    default:
      break;
  }
  return state;
};

export default messagesReducer;
