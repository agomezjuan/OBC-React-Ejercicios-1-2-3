import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class'

const ComponenteB = ({props}) => {
    const {nombre, apellido, email, conectado} = props
  return (
    <div>
        <p>Nombre Completo: {nombre} {apellido}</p>
        <p>Email: {email}</p>
        <p>{conectado ? "Contacto En Línea" : "Contacto No Disponible"}</p>

    </div>
  )
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteB