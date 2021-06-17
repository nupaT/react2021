import { connect } from "react-redux";
import { setUsersAC, subscribeAC } from "../../../Redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    user: state.usersPage.usersData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    Subscribe: (userId) => {
      dispatch(subscribeAC(userId));
    },
    setUsers: (usersData) => {
      dispatch(setUsersAC(usersData));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
