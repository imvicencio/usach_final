

import React from 'react';
import './Navbar.css';
import pikachu from './images/pikachu2.png';




const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar_ul'>
        <li className='navbar_ul_li'>
          <a href="/">Home</a>
        </li>
        <li className='navbar_ul_li'>
          <a  href="/about">About</a>
        </li>
        <li className='navbar_ul_li'>
          <a  href="/services">Services</a>
        </li>
        <li className='navbar_ul_li'>
          <a  href="/contact">Contact</a>
        </li>
      </ul>
      <img className='pikachu2' src={pikachu} alt="pikachu" />
    </nav>
  );
};

export default Navbar;
