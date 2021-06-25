import { connect } from "react-redux";
import { setUsersAC, changeSubscribeAC /*, unSubscribeAC*/ } from "../../../Redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    user: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeSubscribeUser: (userId) => {
      dispatch(changeSubscribeAC(userId));
    },

    // unSubscribeUser: (userId) => {
    //   dispatch(unSubscribeAC(userId));
    // },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
