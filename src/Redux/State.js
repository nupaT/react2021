import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

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
    //применяем старому _State'у новый, вызвав Редюсер-функцию для каждой странички отдельно
    //при вызове мы передаем в функцию старый State и экшн
    this._State.profilePage = profileReducer(this._State.profilePage, action);
    this._State.messagePage = messagesReducer(this._State.messagePage, action);
    this._rerenderMainPage(this._State);
  },
};

export default Store;
