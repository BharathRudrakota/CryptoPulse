import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Ensure this file is linked

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg p-3 border rounded">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold fs-3 text-white" to="/">
          Crypto<span className="text-white">Pulse</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} 
                to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} 
                to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} 
                to="/markets">
                Markets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} 
                to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} 
                to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          {/* Login Button */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
                className="nav-link btn btn-outline-success px-3 rounded-pill text-white" 
                to="">
                Get Started
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
