import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import ProductosPage from './pages/ProductosPage';
import NovedadesPage from './pages/NovedadesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = ()=> {
  return (
    <div className="Container">
      <BrowserRouter>
        <Header />
          <Nav />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/novedades" element={<NovedadesPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
