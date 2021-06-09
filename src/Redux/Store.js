import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let Store = {
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
