// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/assets/pic/masu.png" alt="MASU-Logo"/>
          MASU
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>หน้าแรก</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={toggleMenu}>เข้าสู่ระบบ</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-links" onClick={toggleMenu}>สมัครสมาชิก</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
