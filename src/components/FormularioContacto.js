import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import "../styles/FormularioContacto.css"

const FormularioContacto = (props) => {

  const initialForm = {
    nombre : '',
    email : '',
    comentario : ''
  }

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true)

    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if( response.data.error === false ) {
      setFormData(initialForm)
    }
  }

  return (
    <div className="div-principal">
      <div className="div-h4">
        <h4 className="h4">PEDI TU PRESUPUESTO</h4>
      </div>
      <form action="/contacto" method="post" className="div-form" onSubmit={handleSubmit}>
        <div class="form-floating">
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} class="form-control input-form" id="floatingInput" placeholder="Nombre" />
          <label for="floatingInput">Nombre</label>
        </div>
        <div class="form-floating">
          <input type="email" name="email" value={formData.email} onChange={handleChange} class="form-control input-form" id="floatingPassword" placeholder="Email" />
          <label for="floatingPassword">Email</label>
        </div>
        <div class="form-floating">
          <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} class="form-control input-form textarea" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
          <label for="floatingTextarea2">Mensaje</label>
        </div>
        <div class="div-btn">
          <button  type="submit" class="btn btn-primary">ENVIAR</button>
        </div>
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}
      </form>
    </div>
  )
}

export default FormularioContacto
