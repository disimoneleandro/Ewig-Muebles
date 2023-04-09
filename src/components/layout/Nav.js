import React from 'react';
import { BrowserRouter,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ContactoPage from '../../pages/ContactoPage';
import NosotrosPage from '../../pages/NosotrosPage';
import ProductosPage from '../../pages/ProductosPage';
import '../../styles/Nav.css';

const Nav = () => {
  return (
      <div className="div-nav">
        <h3 className="h3-nav">Ewig</h3>
        <BrowserRouter>
          <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="/nosotros" element={<NosotrosPage />} />
              <Route path="/productos" element={<ProductosPage />} />
          </Routes>

        <ul className='lista-nav'>
                <li><NavLink to="/home" className="btn btn-dark m-2" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/contacto" className="btn btn-dark m-2" activeClassName="active">Contacto</NavLink></li>
                <li><NavLink to="/nosotros" className="btn btn-dark m-2" activeClassName="active">Nosotros</NavLink></li>
                <li><NavLink to="/productos" className="btn btn-dark m-2" activeClassName="active">Productos</NavLink></li>
        </ul>
        </BrowserRouter>
      </div>
  )
}

export default Nav
