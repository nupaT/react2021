import { combineReducers, createStore } from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messagesReducer,
});

let store = createStore(reducers);

//пихаем сторе в глобальный объект window нужен для проверки что все добавляется
window.store = store;

export default store;
