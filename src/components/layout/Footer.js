import React from 'react';
import '../../styles/Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare ,faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="div-footer">
      <div className="info-footer">
        <p className="p-footer">estilo.industrial.ewig@gmail.com</p>
        <p className="p-footer">Funes, Argentina</p>
      </div>
      <div className="div-icons">
        <a href="https://www.facebook.com/Estilo.Industrial.Ewig" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} className="icons-social face"/>
        </a>
        <a href="https://www.instagram.com/muebles.ewig/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icons-social insta" />
        </a>
      </div>
    </div>
  )
}

export default Footer;
