const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";

const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";

let Store = {
  _State: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, howe are you?", likesCount: 2 },
        { id: 2, message: "Hello! I'm fine!", likesCount: 12 },
        { id: 3, message: "Me too!", likesCount: 18 },
        { id: 4, message: "Go!", likesCount: 38 },
      ],

      textPost: "",
    },

    messagePage: {
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
    },
  },
  _rerenderMainPage() {},
  //забирает значение State для внешнего использования (правильное использование данных
  // обращаемся из самого объекта к данным а не из вне)
  getState() {
    return this._State;
  },

  //функция вызывает rerender-функцию из index.js для обновления новых данных
  subscribe(observer) {
    this._rerenderMainPage = observer;
  },

  dispatch(action) {
    switch (action.type) {
      //добавление поста
      case ADD_POST:
        let newPost = {
          id: this._State.profilePage.postsData.length + 1,
          message: this._State.profilePage.textPost,
          likesCount: 0,
        };
        this._State.profilePage.postsData.push(newPost);
        this._State.profilePage.textPost = ""; //обнуление поля ввода после отправки
        this._rerenderMainPage(this._State); //отрисовка изменений после вызова
        break;
      //изменение текста в поле ввода поста
      case CHANGE_POST_TEXT:
        this._State.profilePage.textPost = action.postText;
        this._rerenderMainPage(this._State);
        break;
      //добавление сообщения
      case ADD_MESSAGE:
        let newMess = {
          id: this._State.messagePage.messagesData.length + 1,
          message: this._State.messagePage.textMessage,
        };
        this._State.messagePage.messagesData.push(newMess);
        this._State.messagePage.textMessage = "";
        this._rerenderMainPage(this._State);
        break;
      //изменение текста в поле ввода сообщения
      case CHANGE_MESSAGE_TEXT:
        this._State.messagePage.textMessage = action.messageText;
        this._rerenderMainPage(this._State);
        break;

      default:
        break;
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const changePostTextActionCreator = (text) => {
  return {
    type: CHANGE_POST_TEXT,
    postText: text,
  };
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const changeMessageTextActionCreator = (text) => {
  return {
    type: CHANGE_MESSAGE_TEXT,
    messageText: text,
  };
};

export default Store;
