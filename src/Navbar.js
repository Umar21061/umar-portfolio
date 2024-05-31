import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection, refs }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuClick = (ref) => {
    scrollToSection(ref);
    setMenuVisible(false); // Close menu on selection
  };

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">Umar Murtaza</a>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-menu ${menuVisible ? 'show' : ''}`}>
        <li><a onClick={() => handleMenuClick(refs.homeRef)} href="#">About</a></li>
        <li><a onClick={() => handleMenuClick(refs.servicesRef)} href="#">Services</a></li>
        <li><a onClick={() => handleMenuClick(refs.skillsRef)} href="#">Skills</a></li>
        <li><a onClick={() => handleMenuClick(refs.contactRef)} href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
