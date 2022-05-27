import React, {useContext} from 'react';
import User from './User';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

const UserList = ({onUserDelete}) => {

  const users = useContext(CurrentUserContext);

  return (
    <ul className="page__users">
      {
        users.map(user => (
          <User key={user.id.value} user={user} onUserDelete={onUserDelete}/>
        ))
      }
    </ul>
  );
};

export default UserList;
