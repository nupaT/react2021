const CHANGE_SUBSCRIBE = "CHANGE-SUBSCRIBE";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
//создаем начальное значение state и применяем его как дефолтное state - initialState

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 16,
  currentPage: 1,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    //подписываемся или отписываемся от юзера
    case CHANGE_SUBSCRIBE:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };

    //получение новых юзеров с сервера и их в конец существующих
    case SET_USERS:
      return {
        ...state,
        //пока закоментил чтобы сетать не в конец а полностью перетирать state
        users: [/*...state.users,*/ ...action.users],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    default:
      return state;
  }
};

export const changeSubscribeAC = (userId) => {
  return { type: CHANGE_SUBSCRIBE, userId };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export default UserReducer;
