import React from 'react'
import Tarjeta from './Tarjeta'
import '../styles/Tarjetas.css'

import imagenTarjeta1 from "../imagenes/imagenTarjeta1.jpg"
import imagenTarjeta2 from "../imagenes/imagenTarjeta2.jpg"
import imagenTarjeta3 from "../imagenes/imagenTarjeta3.jpg"
import imagenTarjeta4 from "../imagenes/imagenTarjeta4.jpg"

const tarjetas = [
    {
      id: 1,
      titulo: 'Trabajos al detalle',
      texto:'Nos detenemos en todos los detalles para que nuestros muebles sean de excelencia.',
      image: imagenTarjeta1
    },
    {
      id: 2,
      titulo: 'Muebles pequeños',
      texto:'Contamos con diseños de mubles pequeños como banquetas, repizas, mini bibliotecas, cajones verticales y muchos mas!...',
      image: imagenTarjeta2
    },
    {
      id: 3,
      titulo: 'Creamos cualquier estilo',
      texto:'Traenos un diseño a tu gusto, nosotros nos encargamos de hacerlo como realmente te gusta!.',
      image: imagenTarjeta3
    },
    {
      id: 4,
      titulo: 'Muebles infantiles',
      texto:'Ademas tenemos una seccion para los mas peques, podes ver todos los modelos en nuestro sitio.',
      image: imagenTarjeta4
    }
]

const Tarjetas = () => {
  return (
    <div className="container-cards">
          {
            tarjetas.map(tarjeta => (
              <Tarjeta
                key={tarjeta.id}
                titulo={tarjeta.titulo}
                imagenSourced={tarjeta.image}
                texto={tarjeta.texto}
              />
            ))
          }
    </div>
  )
}

export default Tarjetas
