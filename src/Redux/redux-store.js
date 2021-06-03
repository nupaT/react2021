import { combineReducers, createStore } from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messagesReducer,
});

let Store = createStore(reducers);

export default Store;
