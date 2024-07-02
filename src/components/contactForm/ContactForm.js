import React from "react";
import PropTypes from "prop-types";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name {""}
        <input
        name={name}
        value={name}
        onChange={({ target }) => setName(target.value)}
        style={isDuplicate ? {border: "1px solid red"} : {}}
        title={isDuplicate ? "Contact name already exists" : ""}
        required
        />
      </label>
      <label>
        Email Address{""}
        <input
          name={email}
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
        />
      <label>
        Phone Number {""}
        <input
          name={phone}
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"
          title="Must be in the formart 123-456-7899"
          placeholder="###-###-####"
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  isDuplicate: PropTypes.bool,
  setName: PropTypes.func,
  setEmail: PropTypes.func,
  setPhone: PropTypes.func,
  handleSubmit: PropTypes.func,
};

