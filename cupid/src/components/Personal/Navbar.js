import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../CSS/Navbar.css';

const Navbar = ({ loginText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">MASU</Link>
        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>หน้าแรก</Link>
          </li>
          <li className="nav-item dropdown" ref={dropdownRef}>
            <button
              className="nav-links dropdown-toggle"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              {loginText}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/profile/edit" onClick={() => { toggleDropdown(); toggleMenu(); }}>แก้ไขข้อมูลส่วนตัว</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/login/logout" onClick={() => { toggleDropdown(); toggleMenu(); }}>Log out</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  loginText: PropTypes.string.isRequired,
};

export default Navbar;