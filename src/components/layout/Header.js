import React from 'react';
import '../../styles/Header.css';
import logoEwig from '../../imagenes/logoEwig.png';

const Header = () => {
  return (
    <div className="div-header">
      <img className="img-logo" src={logoEwig} alt="logo"/>
    </div>
  )
}

export default Header;
