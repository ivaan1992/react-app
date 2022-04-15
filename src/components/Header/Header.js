import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="d-flex app-header">
    <h1 className="header-title">Rick & Morty App</h1>
    <nav className="d-flex">
      <NavLink className="d-flex links" to="/">Characters</NavLink>
      <NavLink className="d-flex links" to="/Episodes">Episodes</NavLink>
    </nav>
  </header>
);

export default Header;
