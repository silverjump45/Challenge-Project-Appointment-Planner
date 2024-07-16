import React from "react";
import PropTypes from 'prop-types';

export const ContactPicker = ({ contacts, handleChange, name }) => {
  return (
    <select onChange={handleChange} name={name}>
      <option key={-1} value="" defaultValue={true}>
        No Contact Selected
      </option>
      {contacts.map((contact, index) => (
        <option key={contact.name + index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>  
  );
};

ContactPicker.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  selectContact: PropTypes.func,
};