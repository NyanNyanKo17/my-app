// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; Все права защищены {currentYear} год.</p>
    </footer>
  );
};

export default Footer;
