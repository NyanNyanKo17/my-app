// Input.js
import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="custom-input"
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => {}, 
};

export default Input;
