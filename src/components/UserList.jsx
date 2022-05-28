import React, {useContext} from 'react';
import User from './User';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

const UserList = ({onUserDelete, onUserUpdateClick}) => {

  const users = useContext(CurrentUserContext);

  return (
    <ul className="page__users">
      {
        users.map(user => (
          <User key={user.id} user={user} onUserDelete={onUserDelete} onUserUpdate={onUserUpdateClick}/>
        ))
      }
    </ul>
  );
};

export default UserList;
