import React from "react";
import classes from "./UserDesc.module.css";

const UserDesc = () => {
  return (
    <div className={classes.user__info}>
      <div className={classes.name}>Evgeni A.</div>
      <div className={classes.desc}>
        <ul className={classes.list}>
          <li className={classes.item}>Date of Birth: June 8</li>
          <li className={classes.item}>City: Vitebsk</li>
          <li className={classes.item}>Education: Magistr of cat affairs</li>
        </ul>
      </div>
    </div>
  );
};

export default UserDesc;
