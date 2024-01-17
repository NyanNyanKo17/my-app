// Title.js
import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ text, size, color }) => {
  const titleStyle = {
    fontSize: size,
    color: color,
  };

  return (
    <h2 className="title" style={titleStyle}>
      {text}
    </h2>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

Title.defaultProps = {
  size: '1.5em', 
  color: 'black', 
};

export default Title;
