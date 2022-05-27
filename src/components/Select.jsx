import React from 'react';

const Select = ({defaultValue, options, value, onChange}) => {

  function handleSortClick(evt) {
    onChange(evt.target.value);
  }

  return (
    <select className="sort__list" value={value} onChange={handleSortClick}>
      <option className="sort__item" value="" disabled>{defaultValue}</option>
      {
        options.map(option => (
          <option className="sort__item" key={option.value} value={option.value}>{option.title}</option>
        ))
      }
    </select>
  );
};

export default Select;
