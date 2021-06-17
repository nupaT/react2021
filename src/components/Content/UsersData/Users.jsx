import React from "react";

const Users = (props) => {
  let userInfo = props.user.map((user) => <div>{user.userName}</div>);
  console.log(userInfo.status);
  return (
    <div>
      <div>{userInfo}</div>
      <div>
        <input type="submit" value="Тык" />
      </div>
    </div>
  );
};

export default Users;
