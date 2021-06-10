import React from "react";
import { connect } from "react-redux";
import NavMenu from "./NavMenu";

const mapStateToProps = (state) => {
  return {
    usersData: state.messagePage.usersData,
  };
};

const NavMenuContainer = connect(mapStateToProps)(NavMenu);

export default NavMenuContainer;
