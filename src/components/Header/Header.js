import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="d-flex app-header">
    <h1>Rick & Morty App</h1>
    <nav className="d-flex">
      <NavLink className="links" to="/">Characters</NavLink>
      <NavLink className="links" to="/Location">Location</NavLink>
      <NavLink className="links" to="/Episodes">Episodes</NavLink>
    </nav>
  </header>
);

export default Header;
