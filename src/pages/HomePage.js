import React from 'react';
import '../styles/HomePage.css';
import Tarjetas from '../components/Tarjetas';

const HomePage = () => {
  return (
    <div className="div-home-page">
      <div className="container-right">
        <Tarjetas />
      </div>
    </div>
  )
}

export default HomePage;
