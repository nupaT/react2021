import { combineReducers, createStore } from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import userReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messagesReducer,
  usersPage: userReducer,
});

let store = createStore(reducers);

//пихаем сторе в глобальный объект window нужен для проверки что все добавляется
window.store = store;

export default store;
