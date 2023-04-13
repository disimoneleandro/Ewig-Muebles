import React from 'react'
import "../styles/FormularioContacto.css"

const FormularioContacto = () => {
  return (
    <div className="div-principal">
      <div className="div-h4">
        <h4 className="h4">PEDI TU PRESUPUESTO</h4>
      </div>
      <div className="div-form">
        <div class="form-floating">
          <input type="text" class="form-control input-form" id="floatingInput" placeholder="Nombre" />
          <label for="floatingInput">Nombre</label>
        </div>
        <div class="form-floating">
          <input type="email" class="form-control input-form" id="floatingPassword" placeholder="Email" />
          <label for="floatingPassword">Email</label>
        </div>
        <div class="form-floating">
          <textarea class="form-control input-form textarea" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
          <label for="floatingTextarea2">Comentario / Presupuesto</label>
        </div>
        <div class="div-btn">
          <button  type="submit" class="btn btn-primary">ENVIAR</button>
        </div>
      </div>
    </div>
  )
}

export default FormularioContacto
