import React, {useState} from 'react';

const Input = ({initValue, ...props}) => {

  const [value, setValue] = useState(initValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <input onChange={handleChange} value={value} {...props}/>
  );
};

export default Input;
