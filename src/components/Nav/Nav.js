// Nav.js
import React from 'react';
import './Nav.css';

const Nav = ({ menuItems }) => (
  <nav className="nav">
    <ul>
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.title}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
