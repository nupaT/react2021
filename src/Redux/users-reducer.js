const SUBSCRIBE = "SUBSCRIBE";
const UN_SUBSCRIBE = "UN-SUBSCRIBE";
const SET_USERS = "SET-USERS";
//создаем начальное значение state и применяем его как дефолтное state - initialState

let initialState = {
  users: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    //подписываемся или отписываемся от юзера
    case SUBSCRIBE:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UN_SUBSCRIBE:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    //получение новых юзеров с сервера и их в конец существующих
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const subscribeAC = (userId) => {
  return { type: SUBSCRIBE, userId };
};

export const unSubscribeAC = (userId) => {
  return { type: UN_SUBSCRIBE, userId };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default UserReducer;
