import { connect } from "react-redux";
import {
  setUsersAC,
  changeSubscribeAC,
  setCurrentPageAC,
  setTotalCountUsersAC,
} from "../../../Redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    user: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeSubscribeUser: (userId) => {
      dispatch(changeSubscribeAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },

    setCurrentPage: (pageId) => {
      dispatch(setCurrentPageAC(pageId));
    },

    setTotalCountUsers: (totalCount) => {
      dispatch(setTotalCountUsersAC(totalCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
