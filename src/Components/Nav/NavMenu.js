import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import './NavMenu.css'

export const NavMenu = () => {
 
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav'>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <li className='nav-li'>
          <NavLink
            to="/"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
          >
            Home
          </NavLink>
        </li>
        <li className='nav-li'>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
          >
            About
          </NavLink>
        </li>
        <li className='nav-li'>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
          >
            Projects
          </NavLink>
        </li>
        <li className='nav-li'>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
