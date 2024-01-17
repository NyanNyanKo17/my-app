import React from 'react';
import './Header.css';
import logoUrl from '../../assets/logo.svg';
const Header = () => (
  <div className="header">
    <img src={logoUrl} alt="Sience" />
    <h1>Sience</h1>
  </div>
)
export default Header;