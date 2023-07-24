
import React from 'react';

import './Footer.css';
import pokeball from './images/pokeball.png';


const Footer = () => {
  return (
    <div className='footer'>
      <img className='pokeball' src={pokeball} alt="pokeball" />
      <p>Realizado por Ismael y David Vicencio</p>
      <img className='pokeball' src={pokeball} alt="pokeball" />
    </div>
  );
};

export default Footer;
