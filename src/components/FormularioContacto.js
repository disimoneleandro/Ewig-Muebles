import React from 'react'
import "../styles/FormularioContacto.css"

const FormularioContacto = () => {
  return (
    <div className="div-principal">
      <div className="div-form">
        <div class="form-floating">
          <input type="text" class="form-control input-form" id="floatingInput" placeholder="Nombre" />
          <label for="floatingInput">Nombre</label>
        </div>
        <div class="form-floating">
          <input type="email" class="form-control input-form " id="floatingPassword" placeholder="Email" />
          <label for="floatingPassword">Email</label>
        </div>
        <div class="form-floating">
          <textarea class="form-control input-form" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
        <div>
          <button  type="submit" class="btn btn-primary">Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default FormularioContacto
