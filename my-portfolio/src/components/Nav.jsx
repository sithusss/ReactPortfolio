import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/education" className="nav-button">Education</Link>
        <Link to="/projects" className="nav-button">Projects</Link>
        <Link to="/contact" className="nav-button">Contact</Link>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </nav>
  );
};

export default Nav;