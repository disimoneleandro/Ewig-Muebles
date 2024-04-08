import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Nav.css';
import BurgerBoton from '../BurgerBoton';


const Nav = () => {

  const [show, setShow] = useState(false);

  const showToggle = () => {
    setShow(!show);
    console.log(show)
  }

  return (
      <div className="div-nav">

        <button className="btn-showToggle" onClick={showToggle}>
          <BurgerBoton/>
        </button>

        <ul className={ `lista-nav ${ show ? "isActive" : " " }` }>
          <li className="li-item"><NavLink to="/" className="btn-nav">HOME</NavLink></li>
          <li className="li-item"><NavLink to="/productos" className="btn-nav">PRODUCTOS</NavLink></li>
          <li className="li-item"><NavLink to="/contacto" className="btn-nav">CONTACTO</NavLink></li>
          <li className="li-item"><NavLink to="/novedades" className="btn-nav">NOVEDADES</NavLink></li>
        </ul>

      </div>
  )
}

export default Nav
