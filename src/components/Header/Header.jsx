import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.headerBlock}>
      <img className={classes.logo} src="https://car-logos.net/wp-content/uploads/2018/09/arash-logo.jpg" />
      <div className={classes.title}>
        Header
      </div>
    </header>
  )
}

export default Header;