import React, { useState } from "react";
import "./Navbars.css"; // Importing external CSS file

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Logo / Brand */}
        <a className="navbar-brand" href="/">
          ParkNGo – Find, Book, and Park Effortlessly
        </a>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-links">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle border-0 bg-transparent"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
              >
                Company
              </button>
              <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                <li><a className="dropdown-item" href="/about">About</a></li>
                <li><a className="dropdown-item" href="/features">Features</a></li>
                <li><a className="dropdown-item" href="/blogs">Blogs</a></li>
                <li><a className="dropdown-item" href="/faq">FAQ</a></li>
              </ul>
            </li>
            {/* Register Spot - Now Styled Like Home & Company */}
            <li className="nav-item">
              <a className="register-spot-link" href="/register">
                Register Spot
              </a>
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







