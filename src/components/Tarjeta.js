import React from "react"
import "../styles/Tarjeta.css"

const Tarjeta = ({titulo, imagenSourced, texto}) => {
  return (
    <div className="card">
      <img className="img-cards" src={imagenSourced} alt="Tarjeta" />
      <div className="card-body">
        <h4 className="card-title">{titulo}</h4>
        <p className="card-text">{texto}</p>
      </div>
    </div>
  )
}

export default Tarjeta;
