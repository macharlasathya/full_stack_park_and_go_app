

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/AppLog.png';
import './NavBars.css';

function NavBars() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/app">
          <div className="brand-container">
            <div className="brand-logo">
              <img 
                src={logoImage} 
                alt="Easy Parking Solutions Logo" 
                className="rounded-logo" 
              />
            </div>
            <div className="brand-text-container">
              <span className="brand-text">Easy Parking Solutions</span>
            </div>
          </div>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div 
          className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/app/submit" 
                onClick={closeDropdown}
              >
                SpotReservationDetails
              </Link>
            </li>
            
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                Menu
              </a>
              
              <ul 
                className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
              >
                <li>
                  <Link 
                    className="dropdown-item" 
                    to="/app/about" 
                    onClick={closeDropdown}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    className="dropdown-item" 
                    to="/app/blogs" 
                    onClick={closeDropdown}
                  >
                    Blogs
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link 
                    className="dropdown-item" 
                    to="/app/features" 
                    onClick={closeDropdown}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link 
                    className="dropdown-item" 
                    to="/app/faq" 
                    onClick={closeDropdown}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          
          <div className="contact-number">
            <i className="bi bi-telephone-fill"></i>
            <span>+919392499936</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBars;
























































































































