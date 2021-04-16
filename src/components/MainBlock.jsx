import React from 'react';
import Content from './Content/Content';
import NavMenu from './NavMenu';
import './MainBlock.css';

const MainBlock = () => {
  return (
    <div className="mainBlock">
      <NavMenu />
      <Content />
    </div>
  )
}

export default MainBlock;