import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Nav.css';

const Nav = () => {
  return (
      <div className="div-nav">
        <h3 className="h3-nav">Ewig Muebles</h3>

        <ul className='lista-nav'>
          <li><NavLink to="/home" className="btn btn-dark m-2" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/contacto" className="btn btn-dark m-2" activeClassName="active">Contacto</NavLink></li>
          <li><NavLink to="/nosotros" className="btn btn-dark m-2" activeClassName="active">Nosotros</NavLink></li>
          <li><NavLink to="/productos" className="btn btn-dark m-2" activeClassName="active">Productos</NavLink></li>
        </ul>
      </div>
  )
}

export default Nav
