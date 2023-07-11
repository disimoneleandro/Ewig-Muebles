import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import '../styles/burgerBoton.css'

const BurgerBoton = () => {

  return (
    <div className="div-burger">
      <FontAwesomeIcon  icon={faBars} className='menu-hamburguesa' />
    </div>
  )
}

export default BurgerBoton;
