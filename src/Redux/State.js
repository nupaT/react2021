let Store = {
  _State: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, howe are you?", likesCount: 2 },
        { id: 2, message: "Hello! I'm fine!", likesCount: 12 },
        { id: 3, message: "Me too!", likesCount: 18 },
        { id: 4, message: "Go!", likesCount: 38 },
      ],

      textPost: "",
    },

    messagePage: {
      usersData: [
        { id: 1, name: "User1" },
        { id: 2, name: "User2" },
        { id: 3, name: "User3" },
        { id: 4, name: "User4" },
        { id: 5, name: "User5" },
        { id: 6, name: "User6" },
      ],

      messagesData: [
        { id: 1, message: "Message 1" },
        { id: 2, message: "Message 2" },
        { id: 3, message: "Message 3" },
        { id: 4, message: "Message 4" },
        { id: 5, message: "Message 5" },
        { id: 6, message: "Message 6" },
      ],
    },
  },
  getState() {
    return this._State;
  },

  _rerenderMainPage() {},

  //добавление поста
  addPost() {
    let newPost = {
      id: this._State.profilePage.postsData.length + 1,
      message: this._State.profilePage.textPost,
      likesCount: 0,
    };
    this._State.profilePage.postsData.push(newPost);
    this._State.profilePage.textPost = ""; //обнуление поля ввода после отправки
    this._rerenderMainPage(this._State); //отрисовка изменений после вызова
  },

  //добавление сообщения в диалоги
  addMessage(message) {
    let newMess = {
      id: this._State.messagePage.messagesData.length,
      message: message,
    };
    this._State.messagePage.messagesData.push(newMess);
    this._rerenderMainPage(this._State);
  },

  //отслеживание изменения в поле ввода в посте
  changePostText(postText) {
    this._State.profilePage.textPost = postText;
    this._rerenderMainPage(this._State);
  },

  //функция вызывает rerender-функцию из index.js для обновления новых данных
  subscribe(observer) {
    this._rerenderMainPage = observer;
  },
};

export default Store;
