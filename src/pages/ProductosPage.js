import React from 'react'
import '../styles/ProductosPage.css'
import rack140 from '../imagenes/imagenProductos/rack-140.jpg'
import rack150 from '../imagenes/imagenProductos/rack-150.jpg'
import rack180 from '../imagenes/imagenProductos/rack-180.jpg'
import mesaLuzBlanca from '../imagenes/imagenProductos/mesa-luz-blanca.jpg'
import mesaLuzCajones from '../imagenes/imagenProductos/mesa-luz-cajones.jpeg'
import mesaLuzParaiso from '../imagenes/imagenProductos/mesa-luz-paraiso.jpg'
import ratonaBlanca from '../imagenes/imagenProductos/ratona-blanca.jpg'
import ratonaParaiso from '../imagenes/imagenProductos/ratona-paraiso.jpg'
import ratonaParaiso2 from '../imagenes/imagenProductos/ratona-paraiso2.jpeg'


const ProductosPage = () => {
  return (
    <div className="div-productos-page">
      <div className="div-productos">
        <h2 className='h2-productos'>Rack Tv</h2>
        <div className="productos">
          <div class="card-productos">
              <img src={rack140} class="card-img-prod" alt="..." />
            <div class="card-body-productos">
              <p class="card-text-productos">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card-productos">
              <img src={rack150} class="card-img-prod" alt="..." />
            <div class="card-body-productos">
              <p class="card-text-productos">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card-productos">
              <img src={rack180} class="card-img-prod" alt="..." />
            <div class="card-body-productos">
              <p class="card-text-productos">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="div-productos">
        <h2 className='h2-productos'>Mesas de luz</h2>
        <div className="productos">
          <div class="card-productos">
              <img src={mesaLuzBlanca} class="card-img-prod" alt="..." />
            <div class="card-body-productos">
              <p class="card-text-productos">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card-productos">
              <img src={mesaLuzParaiso} class="card-img-prod" alt="..." />
            <div class="card-body-productos">
              <p class="card-text-productos">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card-productos">
              <img src={mesaLuzCajones} class="card-img-prod" alt="..." />
            <div class="card-body-productos">
              <p class="card-text-productos">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="div-productos">
        <h2 className='h2-productos'>Mesasa Ratonas</h2>
        <div className="productos">
          <div class="card-productos">
              <img src={ratonaBlanca} class="card-img-prod" alt="..." />
            <div class="card-body-productos">
              <p class="card-text-productos">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card-productos">
              <img src={ratonaParaiso} class="card-img-prod" alt="..." />
            <div class="card-body-productos">
              <p class="card-text-productos">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card-productos">
              <img src={ratonaParaiso2} class="card-img-prod" alt="..." />
            <div class="card-body-productos">
              <p class="card-text-productos">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductosPage;
