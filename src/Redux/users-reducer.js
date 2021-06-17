const SUBSCRIBE = "SUBSCRIBE";
const SET_USERS = "SET-USERS";
//создаем начальное значение state и применяем его как дефолтное state - initialState

let initialState = {
  usersData: [
    {
      id: 1,
      userName: "Evgeni",
      userStatus: "I'm best!",
      userLocation: { userCountry: "Belarus", userCity: "Vitebsk" },
      subscribe: true,
    },
    {
      id: 2,
      userName: "Dmitry",
      userStatus: "I'm best of the best!",
      userLocation: { userCountry: "Russia", userCity: "Moskow" },
      subscribe: true,
    },
    {
      id: 3,
      userName: "Irina",
      userStatus: "I'm fine!",
      userLocation: { userCountry: "Ukrain", userCity: "Kiiv" },
      subscribe: false,
    },
    {
      id: 4,
      userName: "Olga",
      userStatus: "I'm woman-cat!",
      userLocation: { userCountry: "USA", userCity: "New York" },
      subscribe: false,
    },
  ],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    //подписываемся или отписываемся от юзера
    case SUBSCRIBE:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.id) {
            return { ...user, subscribe: true };
          }
          return user;
        }),
      };
      break;
    //получение новых юзеров с сервера и их в конец существующих
    case SET_USERS:
      return {
        ...state,
        usersData: [...state.usersData, ...action.usersData],
      };

    default:
      return state;
  }
};

export const subscribeAC = (id) => {
  return { type: SUBSCRIBE, id };
};

export const setUsersAC = (usersData) => {
  return {
    type: SET_USERS,
    usersData,
  };
};

export default UserReducer;
