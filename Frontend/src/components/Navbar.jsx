import React from 'react';
import './Navbar.jsx';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FindMyUni</div>
      <ul className="nav-links">
        <li>Find College</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
