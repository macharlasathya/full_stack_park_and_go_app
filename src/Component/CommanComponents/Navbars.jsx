import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbars.css"; // Importing external CSS file
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import logo from "../../assets/AppLog.png"; // Import your logo here

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Logo / Brand */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Logo" className="navbar-logo" /> {/* Added logo */}
          ParkNGo – Find, Book, and Park Effortlessly
        </a>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-links">
            
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle border-0 bg-transparent"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
              >
                Company
              </button>
              <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                <Link className="dropdown-item" to="/About">About</Link>
                <Link className="dropdown-item" to="/features">Features</Link>
                <Link className="dropdown-item" to="/blogs">Blogs</Link>
                <Link className="dropdown-item" to="/faq">FAQ</Link>
              </ul>
            </li>
            {/* Register Spot */}
            <li className="nav-item">
              <Link className="register-spot-link" to="/Submitform">
                Register Spot
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info on the Right */}
        <div className="contact-info">
          📞 +91 93924 99936
        </div>
      </div>
    </nav>
  );
};

export default Navbars;








