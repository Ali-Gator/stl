import React, {useEffect, useState} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import {Route, Switch, useHistory} from 'react-router-dom';
import UserList from './UserList';
import Select from './Select';
import Form from './Form';

const App = () => {

  const [users, setUsers] = useState([]);
  const [selectedSort, setSelectedSort] = useState('');
  const [userToUpdate, setUserToUpdate] = useState({});
  const history = useHistory();

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
      .then(data => {
        const users = data.results.map(result => {
          return {
            firstname: result.name.first,
            lastname: result.name.last,
            age: result.dob.age,
            phone: result.phone,
            country: result.nat,
            email: result.email,
            id: result.id.value
          };
        });
        setUsers(users);
      })
      .catch(err => console.log(err));
  }, []);

  function handleSort(value) {
    setSelectedSort(value);
    setUsers([...users].sort((a, b) => a[value].localeCompare(b[value])));
  }

  function handleUserDelete(userToDelete) {
    setUsers(users.filter(user => user.id !== userToDelete.id));
  }

  function handleOnUpdateClick(user) {
    setUserToUpdate(user);
    history.push('/user');
  }

  function handleUpdateUser(userToUpdate) {
    setUsers(users.map(user => {
      if (user.id === userToUpdate.id) {
        return userToUpdate;
      }
      return user;
    }));
  }

  return (
    <CurrentUserContext.Provider value={users}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <h1 className="page__title">Users list</h1>
            <div className="page__filters">
              <Select
                value={selectedSort}
                onChange={handleSort}
                defaultValue="Sort"
                options={[
                  {value: 'firstname', title: 'By name'},
                  {value: 'country', title: 'By country'}
                ]}/>
            </div>
            <UserList onUserDelete={handleUserDelete} onUserUpdateClick={handleOnUpdateClick}/>
          </Route>
          <Route path="/user">
            <h1 className="page__title">User's details</h1>
            <Form user={userToUpdate} onUserUpdate={handleUpdateUser}/>
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
