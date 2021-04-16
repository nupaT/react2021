import React from 'react';
import UserInfo from './UserInfo';
import './Content.css';

const Content = () => {
  return (
    <div className = "content">
      <img className="content__image" src="https://static8.depositphotos.com/1370441/848/i/600/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg" />
      <UserInfo />
    </div>
  )
}

export default Content;