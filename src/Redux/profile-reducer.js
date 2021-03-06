const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";

//создаем начальное значение state и применяем его как дефолтное state - initialState

let initialState = {
  postsData: [
    { id: 1, message: "Hi, howe are you?", likesCount: 2 },
    { id: 2, message: "Hello! I'm fine!", likesCount: 12 },
    { id: 3, message: "Me too!", likesCount: 18 },
    { id: 4, message: "Go!", likesCount: 38 },
  ],

  textPost: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    //добавление поста
    case ADD_POST: {
      let newPost = {
        id: state.postsData.length + 1,
        message: state.textPost,
        likesCount: 0,
      };
      //возвращаем изменяемые значения на страничке
      return {
        ...state,
        //вместо push можно довавить в конец массива с помощью spread новое значение
        postsData: [...state.postsData, newPost],
        textPost: "",
      };
    }
    //изменение текста в поле ввода поста
    case CHANGE_POST_TEXT: {
      return {
        ...state,
        textPost: action.postText,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const changePostTextActionCreator = (text) => {
  return {
    type: CHANGE_POST_TEXT,
    postText: text,
  };
};

export default profileReducer;
