import React, {useEffect, useState} from 'react';
import UserList from './UserList';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import Select from './Select';

const App = () => {

  const [users, setUsers] = useState([]);
  const [selectedSort, setSelectedSort] = useState('');

  function getInitialUsers() {
    return fetch('https://randomuser.me/api/?results=20&noinfo&nat=us,fr,gb&inc=name,nat,email,phone,dob,id', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.ok ? res.json() : alert(`Error: ${res.status}. Try once again!`));
  }

  useEffect(() => {
    getInitialUsers()
      .then(data => setUsers(data.results))
      .catch(err => console.log(err));
  }, []);

  function handleUserDelete(userToDelete) {
    setUsers(users.filter(user => user.id.value !== userToDelete.id.value));
  }

  function handleSort(value) {
    setSelectedSort(value);
    if (value === 'name') {
      setUsers([...users].sort((a, b) => a.name.first.localeCompare(b.name.first)));
    } else if (value === 'country') {
      setUsers([...users].sort((a, b) => a.nat.localeCompare(b.nat)));
    }
  }

  return (
    <CurrentUserContext.Provider value={users}>
      <div className="page">
        <h1 className="page__title">Users list</h1>
        <div className="page__filters sort">
          <Select
            value={selectedSort}
            onChange={handleSort}
            defaultValue="Sort"
            options={[
              {value: 'name', title: 'By name'},
              {value: 'country', title: 'By country'}
            ]}/>
        </div>
        <UserList onUserDelete={handleUserDelete}/>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
