import React from 'react';
import Button from './Button';

const User = ({user, onUserDelete}) => {

  const name = `${user.name.first} ${user.name.last}`;
  const age = user.dob.age;
  const tel = user.phone;
  const country = user.nat;
  const email = user.email;

  function handleDeleteClick() {
    onUserDelete(user);
  }

  return (
    <li className="user">
      <div className="user__info">
        <p className="user__data">{`${name}, ${age}`}</p>
        <a className="user__phone" href={`tel:${tel}`}>{tel}</a>
        <p className="user__country">{country}</p>
        <a className="user__email" href={`mailto:${email}`}>{email}</a>
      </div>
      <div className="user__buttons">
        <Button className="button button_type_update">Update</Button>
        <Button onClick={handleDeleteClick} className="button button_type_delete">Delete</Button>
      </div>
    </li>
  );
};

export default User;
