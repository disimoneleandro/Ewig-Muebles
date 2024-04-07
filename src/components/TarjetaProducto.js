import React from "react"
import "../styles/TarjetaProducto.css"

const TarjetaProducto = ({titulo, imagenSourced}) => {
  return (
    <div className="card-productos">
        <img src={imagenSourced} className="card-img-top" alt="TarjetaProducto" />
        <div className="div-card-body">
            <h5 className="card-title-productos">{titulo}TITULO</h5>
        </div>
        <div className="div-card-link">
            <a href="#" className="card-link">Enlace de tarjeta</a>
        </div>
    </div>
  )
}

export default TarjetaProducto;