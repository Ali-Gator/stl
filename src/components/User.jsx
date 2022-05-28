import React from 'react';
import Button from './Button';

const User = ({user, onUserDelete, onUserUpdate}) => {

  function handleDeleteClick() {
    onUserDelete(user);
  }

  function handleUpdateClick() {
    onUserUpdate(user);
  }

  return (
    <li className="user">
      <div className="user__info">
        <p className="user__data">{`${user.firstname} ${user.lastname}, ${user.age}`}</p>
        <a className="user__phone" href={`tel:${user.phone}`}>{user.phone}</a>
        <p className="user__country">{user.country}</p>
        <a className="user__email" href={`mailto:${user.email}`}>{user.email}</a>
      </div>
      <div className="user__buttons">
        <Button onClick={handleUpdateClick} className="button">Update</Button>
        <Button onClick={handleDeleteClick} className="button button_type_delete">Delete</Button>
      </div>
    </li>
  );
};

export default User;
