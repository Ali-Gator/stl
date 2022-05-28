import React, {useState} from 'react';
import Input from './Input';
import {useHistory} from 'react-router-dom';
import Select from './Select';
import Button from './Button';

const Form = ({user, onUserUpdate}) => {

  const [country, setCountry] = useState(user.country);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const userToUpdate = {};
    const data = new FormData(e.target);
    for (const [name, value] of data) {
      userToUpdate[name] = value;
    }
    onUserUpdate({'id': user.id, ...userToUpdate});
    history.push('/');
  }

  function handleBackClick() {
    history.push('/');
  }

  function handleCountrySelect(value) {
    setCountry(value);
  }

  return (
    <form onSubmit={handleSubmit} className="patch">
      <Input initValue={user.firstname} name="firstname" type="text" className="patch__input" required></Input>
      <Input initValue={user.lastname} name="lastname" type="text" className="patch__input" required></Input>
      <Input initValue={user.age} name="age" type="number" className="patch__input" required></Input>
      <Input initValue={user.phone} name="phone" className="patch__input" required></Input>
      <Input initValue={user.email} name="email" type="email" className="patch__input" required></Input>
      <Select name="country"
              value={country}
              onChange={handleCountrySelect}
              options={[
                {value: 'FR', title: 'FR'},
                {value: 'GB', title: 'GB'},
                {value: 'US', title: 'US'},
              ]}>
      </Select>
      <div className="patch__buttons">
        <Button className="button" onClick={handleBackClick} type="button">Back</Button>
        <Button className="button button_type_save" type="submit">Save</Button>
      </div>
    </form>
  );
};

export default Form;
