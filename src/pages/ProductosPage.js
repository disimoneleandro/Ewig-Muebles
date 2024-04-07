import React from 'react'
import '../styles/ProductosPage.css'
import TarjetaProducto from '../components/TarjetaProducto'


const ProductosPage = () => {
  return (
    <div className="productos-container">
      <TarjetaProducto />
      <TarjetaProducto />
      <TarjetaProducto />
    </div>
  )
}

export default ProductosPage;
