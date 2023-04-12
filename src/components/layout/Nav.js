import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Nav.css';


const Nav = () => {
  return (
      <div className="div-nav">
        <ul className='lista-nav'>
          <li><NavLink to="/" className="btn-nav">HOME</NavLink></li>
          <li><NavLink to="/productos" className="btn-nav">PRODUCTOS</NavLink></li>
          <li><NavLink to="/nosotros" className="btn-nav">NOSOTROS</NavLink></li>
          <li><NavLink to="/contacto" className="btn-nav">CONTACTO</NavLink></li>
        </ul>
      </div>
  )
}

export default Nav
