const SUBSCRIBE = "SUBSCRIBE";
const SET_USERS = "SET-USERS";
//создаем начальное значение state и применяем его как дефолтное state - initialState

let initialState = {
  usersData: [
    {
      id: 1,
      userAva:
        "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg",
      userName: "Evgeni",
      userStatus: "I'm best!",
      userLocation: { userCountry: "Belarus", userCity: "Vitebsk" },
      subscribe: true,
    },
    {
      id: 2,
      userAva:
        "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg",
      userName: "Dmitry",
      userStatus: "I'm best of the best!",
      userLocation: { userCountry: "Russia", userCity: "Moskow" },
      subscribe: true,
    },
    {
      id: 3,
      userAva:
        "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg",
      userName: "Irina",
      userStatus: "I'm fine!",
      userLocation: { userCountry: "Ukrain", userCity: "Kiiv" },
      subscribe: false,
    },
    {
      id: 4,
      userAva:
        "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg",
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
