const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

let initialState = {
  usersData: [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" },
    { id: 4, name: "User4" },
    { id: 5, name: "User5" },
    { id: 6, name: "User6" },
  ],

  messagesData: [
    { id: 1, message: "Message 1" },
    { id: 2, message: "Message 2" },
    { id: 3, message: "Message 3" },
    { id: 4, message: "Message 4" },
    { id: 5, message: "Message 5" },
    { id: 6, message: "Message 6" },
  ],

  textMessage: "",
};

const messagesReducer = (state = initialState, action) => {
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

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export const changeMessageTextActionCreator = (text) => {
  return {
    type: CHANGE_MESSAGE_TEXT,
    messageText: text,
  };
};

export default messagesReducer;
