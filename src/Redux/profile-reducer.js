const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    //добавление поста
    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1,
        message: state.textPost,
        likesCount: 0,
      };
      state.postsData.push(newPost);
      state.textPost = ""; //обнуление поля ввода после отправки
      break;
    //изменение текста в поле ввода поста
    case CHANGE_POST_TEXT:
      state.textPost = action.postText;
      break;

    default:
      break;
  }
  return state;
};

export default profileReducer;
