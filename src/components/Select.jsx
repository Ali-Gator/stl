import React from 'react';

const Select = ({defaultValue, options, value, onChange, ...props}) => {

  function handleChange(evt) {
    onChange(evt.target.value);
  }

  return (
    <select className="select-list" value={value} onChange={handleChange} {...props}>
      {defaultValue && <option className="select-list__item" value="" disabled>{defaultValue}</option>}
      {
        options.map(option => (
          <option className="select-list__item" key={option.value} value={option.value}>{option.title}</option>
        ))
      }
    </select>
  );
};

export default Select;
